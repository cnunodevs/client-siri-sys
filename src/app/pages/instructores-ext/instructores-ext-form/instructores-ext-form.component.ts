import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { InstitucionDTO } from 'app/shared/models/institucion-dto';
import { InstructoresExtDTO } from 'app/shared/models/instructores-ext-dto';
import { PaisDTO } from 'app/shared/models/pais-dto';
import { ApiService } from 'app/shared/services/api.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instructores-ext-form',
  templateUrl: './instructores-ext-form.component.html',
  styleUrls: ['./instructores-ext-form.component.scss']
})
export class InstructoresExtFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: InstructoresExtDTO;
  convenios: ConvenioDTO[] = [];
  pais: PaisDTO[] = [];
  institucion: InstitucionDTO[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _peticionesService: PeticionesService

  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      no: ['', Validators.required],
      nombre: ['', Validators.required],
      objeto: ['', Validators.required],
      coordinacionAcademica: ['', Validators.required],
      contratista: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      pais: ['', Validators.required],
      institucion: ['', Validators.required],
      convenio: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("intructoresExt")
  }

  async ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("intructoresExt"));
    if (this.dataEdit) {
      this.formulario.controls['no'].setValue(this.dataEdit.no)
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['fechaInicio'].setValue(new Date(this.dataEdit.fechaInicio))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['objeto'].setValue(this.dataEdit.objeto)
      this.formulario.controls['coordinacionAcademica'].setValue(this.dataEdit.coordinacionAcademica)
      this.formulario.controls['contratista'].setValue(this.dataEdit.contratista)
      this.formulario.controls['pais'].setValue(this.dataEdit.pais)
      this.formulario.controls['institucion'].setValue(this.dataEdit.institucion.nombre)
      this.formulario.controls['convenio'].setValue(this.dataEdit.convenio.codigo)


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
    await this._apiService.pais$.subscribe(
      {
          next: (value: PaisDTO[]) => {
            console.log(value)
            this.pais = value;
          }
      }
    )
    await this._apiService.instituciones$.subscribe(
      {
          next: (value: InstitucionDTO[]) => {
            console.log(value)
            this.institucion = value;
          }
      }
    )
  }


  async enviarFormulario() {
    if (this.formulario.valid) {
      const json: InstructoresExtDTO = {
        no: this.formulario.value.no,
        nombre: this.formulario.value.nombre,
        objeto: this.formulario.value.objeto,
        coordinacionAcademica: this.formulario.value.coordinacionAcademica,
        contratista: this.formulario.value.contratista,
        fechaInicio: new Date(this.formulario.value.fechaInicio),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        pais: {
          id: this.formulario.value.pais
        },
        institucion: {
          id: this.formulario.value.institucion
        },
        convenio: {
          id: this.formulario.value.convenio
        }
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/expertos-internacionales/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("intructoresExt")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/expertos-internacionales/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("intructoresExt")
        })
    }
  }
}
