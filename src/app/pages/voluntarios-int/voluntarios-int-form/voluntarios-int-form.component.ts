import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AsesorDTO } from 'app/shared/models/asesor-dto';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { PaisDTO } from 'app/shared/models/pais-dto';
import { VoluntarioInternacionalesColDTO } from 'app/shared/models/voluntario-internacionales-col-dto';
import { ApiService } from 'app/shared/services/api.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-int-form',
  templateUrl: './voluntarios-int-form.component.html',
  styleUrls: ['./voluntarios-int-form.component.scss']
})
export class VoluntariosIntFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: VoluntarioInternacionalesColDTO;
  asesor: AsesorDTO[] = [];
  convenios: ConvenioDTO[] = [];
  pais: PaisDTO[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
    private _peticionesService: PeticionesService
    ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      objeto: ['', Validators.required],
      centroFormacion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      pais: ['', Validators.required],
      asesor: ['', Validators.required],
      convenio: ['', Validators.required]
    })
  }
  ngOnDestroy(): void {
    localStorage.removeItem("voluntariosInt");
  }

  async ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("voluntariosInt"));
    if (this.dataEdit) {
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['objeto'].setValue(this.dataEdit.objeto)
      this.formulario.controls['fechaInicio'].setValue(new Date(this.dataEdit.fechaInicio))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['centroFormacion'].setValue(this.dataEdit.centroFormacion)
      this.formulario.controls['pais'].setValue(this.dataEdit.pais.nombre)
      this.formulario.controls['asesor'].setValue(this.dataEdit.asesor.nombre)
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
    await this._apiService.pais$.subscribe(
      {
          next: (value: PaisDTO[]) => {
            this.pais = value;
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

  async enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      const json: VoluntarioInternacionalesColDTO = {
        nombre: this.formulario.value.objeto,
        objeto: this.formulario.value.nombre,
        centroFormacion: this.formulario.value.cargo,
        fechaInicio: new Date(this.formulario.value.fechaInicio),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        asesor: {
          id: this.formulario.value.asesor
        },
        pais: {
          id: this.formulario.value.pais
        },
        convenio: {
          id: this.formulario.value.convenio
        }
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/voluntarios-internacionales/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("voluntariosInt")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/voluntarios-internacionales/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("voluntariosInt")
        })
    }
  }
}
