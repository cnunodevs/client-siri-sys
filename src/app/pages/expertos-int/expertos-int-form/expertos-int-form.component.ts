import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AsesorDTO } from 'app/shared/models/asesor-dto';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { ExpertosInternacionalesDTO } from 'app/shared/models/expertos-internacionales-dto';
import { InstitucionDTO } from 'app/shared/models/institucion-dto';
import { PaisDTO } from 'app/shared/models/pais-dto';
import { ApiService } from 'app/shared/services/api.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-expertos-int-form',
  templateUrl: './expertos-int-form.component.html',
  styleUrls: ['./expertos-int-form.component.scss']
})
export class ExpertosIntFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: ExpertosInternacionalesDTO;
  asesor: AsesorDTO[] = [];
  convenios: ConvenioDTO[] = [];
  pais: PaisDTO[] = [];
  institucion: InstitucionDTO[] = [];
  formularioEnviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _peticionesService: PeticionesService

  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      objeto: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      pais: ['', Validators.required],
      institucion: ['', Validators.required],
      asesor: ['', Validators.required],
      convenio: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("expertosInt")
  }

  async ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("expertosInt"));
    if (this.dataEdit) {
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['cargo'].setValue(this.dataEdit.cargo)
      this.formulario.controls['objeto'].setValue(this.dataEdit.objeto)
      this.formulario.controls['fechaInicio'].setValue(new Date(this.dataEdit.fechaInicio))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['pais'].setValue(this.dataEdit.institucion.pais.nombre)
      this.formulario.controls['institucion'].setValue(this.dataEdit.institucion.nombre)
      this.formulario.controls['asesor'].setValue(this.dataEdit.asesor)
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
          this.pais = value;
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
    await this._apiService.asesor$.subscribe(
      {
        next: (value: AsesorDTO[]) => {
          this.asesor = value;
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
      if (this.formulario.valid) {
        const json: ExpertosInternacionalesDTO = {
          nombre: this.formulario.value.nombre,
          cargo: this.formulario.value.cargo,
          objeto: this.formulario.value.objeto,
          fechaInicio: new Date(this.formulario.value.fechaInicio),
          fechaFinal: new Date(this.formulario.value.fechaFinal),
          asesor: {
            id: this.formulario.value.asesor
          },
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
              localStorage.removeItem("expertosInt")
            })
          return;
        }
        await this._peticionesService.postDatos("api/v1/expertos-internacionales/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("expertosInt")
          })
      }
    }
  }
}
