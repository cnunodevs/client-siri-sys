import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { InstitucionDTO } from 'app/shared/models/institucion-dto';
import { VoluntarioInstructoresFormadosColDTO } from 'app/shared/models/voluntario-instructores-formados-col-dto';
import { ApiService } from 'app/shared/services/api.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-sena-inst-form-col-form',
  templateUrl: './voluntarios-sena-inst-form-col-form.component.html',
  styleUrls: ['./voluntarios-sena-inst-form-col-form.component.scss']
})
export class VoluntariosSenaInstFormColFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: VoluntarioInstructoresFormadosColDTO;
  convenios: ConvenioDTO[] = [];
  institucion: InstitucionDTO[] = [];
  formularioEnviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      objetoFormacion: ['', [Validators.required]],
      institucionFormadoraExt: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaInicial: ['', [Validators.required]],
      fechaFinal: ['', [Validators.required]],
      convenio: ['', [Validators.required]]
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("voluntariosSenForm")
  }

  async ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("voluntariosSenForm"));
    if (this.dataEdit) {
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['apellido'].setValue(this.dataEdit.apellido)
      this.formulario.controls['objetoFormacion'].setValue(this.dataEdit.objetoFormacion)
      this.formulario.controls['institucionFormadoraExt'].setValue(this.dataEdit.institucionFormadoraExt)
      this.formulario.controls['fechaInicial'].setValue(new Date(this.dataEdit.fechaInicial))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['convenio'].setValue(this.dataEdit.convenio.id)


      this.isEdit = true;
    }
    await this.cargarData();
  }

  async cargarData() {
    await this._apiService.convenios$.subscribe(
      {
        next: (value: ConvenioDTO[]) => {
          this.convenios = value;
        }
      }
    )
    await this._apiService.instituciones$.subscribe(
      {
        next: (value: InstitucionDTO[]) => {
          this.institucion = value;
        }
      }
    )
  }

  estadoFormulario() {
    this.formularioEnviado = false;
  }

  async enviarFormulario() {
    this.formularioEnviado = true;
    if (this.formulario.valid) {
      this.formularioEnviado = false;
      // Aquí puedes hacer lo que necesites con los datos del formulario
      const json: VoluntarioInstructoresFormadosColDTO = {
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        objetoFormacion: this.formulario.value.institucionFormadoraExt,
        institucionFormadoraExt: {
          id: this.formulario.value.institucionFormadoraExt
        },
        fechaInicial: new Date(this.formulario.value.fechaInicial),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        convenio: {
          id: this.formulario.value.convenio
        }
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/voluntarios-instructores-formados-col/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("voluntariosSenForm")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/voluntarios-instructores-formados-col/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("voluntariosSenForm")
        })
    }
  }
}
