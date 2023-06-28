import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { InstitucionDTO } from 'app/shared/models/institucion-dto';
import { InstructoresFormadosColDTO } from 'app/shared/models/instructores-formados-col-dto';
import { ApiService } from 'app/shared/services/api.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instructores-sena-form-col-form',
  templateUrl: './instructores-sena-form-col-form.component.html',
  styleUrls: ['./instructores-sena-form-col-form.component.scss']
})
export class InstructoresSenaFormColFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: InstructoresFormadosColDTO;
  convenios: ConvenioDTO[] = [];
  institucion: InstitucionDTO[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      objetoFormacion: ['', Validators.required],
      institucionFormadoraExt: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      convenio: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("intructoresForm");
  }

  async ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("intructoresForm"));
    if (this.dataEdit) {
      this.formulario.controls['objetoFormacion'].setValue(this.dataEdit.objetoFormacion)
      this.formulario.controls['institucionFormadoraExt'].setValue(this.dataEdit.institucionFormadoraExt)
      this.formulario.controls['fechaInicial'].setValue(new Date(this.dataEdit.fechaInicial))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['apellido'].setValue(this.dataEdit.apellido)
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
    await this._apiService.instituciones$.subscribe(
      {
          next: (value: InstitucionDTO[]) => {
            this.institucion = value;
          }
      }
    )
  }


  async enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      const json: InstructoresFormadosColDTO = {
        objetoFormacion: this.formulario.value.objetoFormacion,
        institucionFormadoraExt: {
          id: this.formulario.value.institucionFormadoraExt
        },
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        fechaInicial: new Date(this.formulario.value.fechaInicial),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        convenio: {
          id: this.formulario.value.convenio
        }
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/instructores-formados-col/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("intructoresForm")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/instructores-formados-col/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("intructoresForm")
        })
    }
  }
}
