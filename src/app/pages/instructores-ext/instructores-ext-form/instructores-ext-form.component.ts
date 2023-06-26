import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstructoresExtDTO } from 'app/shared/models/instructores-ext-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instructores-ext-form',
  templateUrl: './instructores-ext-form.component.html',
  styleUrls: ['./instructores-ext-form.component.scss']
})
export class InstructoresExtFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: InstructoresExtDTO;

  constructor(
    private formBuilder: FormBuilder,
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

  ngOnInit() {
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
