import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstructoresFormadosColDTO } from 'app/shared/models/instructores-formados-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-instructores-sena-form-col-form',
  templateUrl: './instructores-sena-form-col-form.component.html',
  styleUrls: ['./instructores-sena-form-col-form.component.scss']
})
export class InstructoresSenaFormColFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: InstructoresFormadosColDTO;

  constructor(
    private formBuilder: FormBuilder,
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

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("intructoresExt"));
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
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      const json: InstructoresFormadosColDTO = {
        objetoFormacion: this.formulario.value.objetoFormacion,
        institucionFormadoraExt: this.formulario.value.institucionFormadoraExt,
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        fechaInicial: new Date(this.formulario.value.fechaInicial),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
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
