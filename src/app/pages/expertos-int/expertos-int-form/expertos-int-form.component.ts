import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpertosInternacionalesDTO } from 'app/shared/models/expertos-internacionales-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-expertos-int-form',
  templateUrl: './expertos-int-form.component.html',
  styleUrls: ['./expertos-int-form.component.scss']
})
export class ExpertosIntFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: ExpertosInternacionalesDTO;

  constructor(
    private formBuilder: FormBuilder,
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

  ngOnInit() {


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
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      if (this.formulario.valid) {
        const json: ExpertosInternacionalesDTO = {
          nombre: this.formulario.value.nombre,
          cargo: this.formulario.value.cargo,
          objeto: this.formulario.value.objeto,
          fechaInicio: new Date(this.formulario.value.fechaInicio),
          fechaFinal: new Date(this.formulario.value.fechaFinal),
          pais: {
            id: 1
          },
          institucion: {
            id: 1
          },
          asesor: {
            id: 1
          },
          convenio: {
            id: 1
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
