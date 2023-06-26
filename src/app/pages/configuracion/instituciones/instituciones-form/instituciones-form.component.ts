import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstitucionDTO } from 'app/shared/models/institucion-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instituciones-form',
  templateUrl: './instituciones-form.component.html',
  styleUrls: ['./instituciones-form.component.scss']
})
export class InstitucionesFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: InstitucionDTO;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      pais: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("institucion"));
    if (this.dataEdit) {
      this.formulario.controls['codigo'].setValue(this.dataEdit.codigo)
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['tipo'].setValue(this.dataEdit.tipo)
      this.formulario.controls['pais'].setValue(this.dataEdit.pais)

      this.isEdit = true;
    }
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      const json: InstitucionDTO = {
        codigo: this.formulario.value.codigo,
        nombre: this.formulario.value.nombre,
        tipo: this.formulario.value.tipo,
        pais: {
          id: this.formulario.value.pais
        },
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/instituciones/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("institucion")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/instituciones/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("institucion")
        })
    }
  }
}