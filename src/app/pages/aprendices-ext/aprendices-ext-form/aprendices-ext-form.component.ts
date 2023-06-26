import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AprendicesExtDTO } from 'app/shared/models/aprendices-ext-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-aprendices-ext-form',
  templateUrl: './aprendices-ext-form.component.html',
  styleUrls: ['./aprendices-ext-form.component.scss']
})
export class AprendicesExtFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: AprendicesExtDTO;

  constructor(
    private formBuilder: FormBuilder,
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

  ngOnInit() {
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
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      const json: AprendicesExtDTO = {
        objetoFormacion: this.formulario.value.objetoFormacion,
        programaFormacion: this.formulario.value.programaFormacion,
        nombre: this.formulario.value.nombre,
        fechaInicio: new Date(this.formulario.value.fechaInicio),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        pais: {
          id: 1
        },
        institucion: {
          id: 1
        },
        convenio: {
          id: 1
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
