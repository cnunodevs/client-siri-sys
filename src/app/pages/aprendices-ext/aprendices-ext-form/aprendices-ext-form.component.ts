import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AprendicesExtDTO } from 'app/shared/models/aprendices-ext-dto';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';
import { ApiService } from '../../../shared/services/api.service';
import { InstitucionDTO } from 'app/shared/models/institucion-dto';
import { PaisDTO } from 'app/shared/models/pais-dto';

@Component({
  selector: 'app-aprendices-ext-form',
  templateUrl: './aprendices-ext-form.component.html',
  styleUrls: ['./aprendices-ext-form.component.scss']
})
export class AprendicesExtFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: AprendicesExtDTO;
  convenios: ConvenioDTO[] = [];
  pais: PaisDTO[] = [];
  institucion: InstitucionDTO[] = [];
  formularioEnviado: boolean = false;
  contenedor: number = null;
  conv = "Nota debe tener un convenio registrado para el envio exitoso";
  inst = "Nota debe tener una institucion registrado para el envio exitoso";
  isHovered: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      objetoFormacion: ['', Validators.required],
      programaFormacion: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      pais: ['', Validators.required],
      institucion: ['', Validators.required],
      convenio: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("aprendizExt")
  }

  async ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("aprendizExt"));
    if (this.dataEdit) {
      this.formulario.controls['objetoFormacion'].setValue(this.dataEdit.objetoFormacion)
      this.formulario.controls['programaFormacion'].setValue(this.dataEdit.programaFormacion)
      this.formulario.controls['pais'].setValue(this.dataEdit.pais.nombre)
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['fechaInicio'].setValue(new Date(this.dataEdit.fechaInicio))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['institucion'].setValue(this.dataEdit.institucion.nombre)
      this.formulario.controls['convenio'].setValue(this.dataEdit.convenio.codigo)

      this.isEdit = true;
    }
    await this.cargarData();
  }

  onHover(cont): void {
    this.isHovered = !this.isHovered;
    if (this.isHovered || cont == 1) {
      this.contenedor = 1
    }
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
  estadoFormulario(){
    this.formularioEnviado = false;
  }

  async enviarFormulario() {
    this.formularioEnviado = true;
    if (this.formulario.valid) {
      this.formularioEnviado = false;
      const json: AprendicesExtDTO = {
        objetoFormacion: this.formulario.value.objetoFormacion,
        programaFormacion: this.formulario.value.programaFormacion,
        nombre: this.formulario.value.nombre,
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
        await this._peticionesService.postDatos("api/v1/aprendices-ext/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("aprendizExt")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/aprendices-ext/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("aprendizExt")
        })
    }
  }
}
