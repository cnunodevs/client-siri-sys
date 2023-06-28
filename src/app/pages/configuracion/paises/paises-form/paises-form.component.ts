import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisDTO } from 'app/shared/models/pais-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-paises-form',
  templateUrl: './paises-form.component.html',
  styleUrls: ['./paises-form.component.scss']
})
export class PaisesFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: PaisDTO;
  formularioEnviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      abreviatura: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("paises");
  }

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("paises"));
    if (this.dataEdit) {
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['abreviatura'].setValue(this.dataEdit.abreviatura)

      this.isEdit = true;
    }
  }

  estadoFormulario(){
    this.formularioEnviado = false;
  }

  async enviarFormulario() {

    this.formularioEnviado = true;
    if (this.formulario.valid) {
    this.formularioEnviado = false;
      const json: PaisDTO = {
        id: 0,
        nombre: this.formulario.value.nombre,
        abreviatura: this.formulario.value.abreviatura,
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/paises/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("paises")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/paises/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("paises")
        })
    }
  }
}
