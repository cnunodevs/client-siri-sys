import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoluntarioInstructoresFormadosColDTO } from 'app/shared/models/voluntario-instructores-formados-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-sena-inst-form-col-form',
  templateUrl: './voluntarios-sena-inst-form-col-form.component.html',
  styleUrls: ['./voluntarios-sena-inst-form-col-form.component.scss']
})
export class VoluntariosSenaInstFormColFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: VoluntarioInstructoresFormadosColDTO;

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
    this.dataEdit = JSON.parse(localStorage.getItem("voluntariosForm"));
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
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      const json: VoluntarioInstructoresFormadosColDTO = {
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        objetoFormacion: this.formulario.value.institucionFormadoraExt,
        institucionFormadoraExt: this.formulario.value.institucionFormadoraExt,
        fechaInicial: new Date(this.formulario.value.fechaInicio),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        convenio: {
          id: 1
        }
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/voluntarios-aprendices-formados-col/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("voluntariosForm")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/voluntarios-aprendices-formados-col/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("voluntariosForm")
        })
    }
  }
}
