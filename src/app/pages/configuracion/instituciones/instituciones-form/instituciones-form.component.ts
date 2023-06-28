import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstitucionDTO } from 'app/shared/models/institucion-dto';
import { PaisDTO } from 'app/shared/models/pais-dto';
import { ApiService } from 'app/shared/services/api.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instituciones-form',
  templateUrl: './instituciones-form.component.html',
  styleUrls: ['./instituciones-form.component.scss']
})
export class InstitucionesFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: InstitucionDTO;
  pais: PaisDTO[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
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
  ngOnDestroy(): void {
    localStorage.removeItem("institucion");
  }

  async ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("institucion"));
    if (this.dataEdit) {
      this.formulario.controls['codigo'].setValue(this.dataEdit.codigo)
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['tipo'].setValue(this.dataEdit.tipo)
      this.formulario.controls['pais'].setValue(this.dataEdit.pais)

      this.isEdit = true;
    }
    await this.cargarData();
  }

  async cargarData() {
    await this._apiService.convenios$.subscribe(
      {
          next: (value: PaisDTO[]) => {
            this.pais = value;
          }
      }
    )
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      const json: InstitucionDTO = {
        id: 0,
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
