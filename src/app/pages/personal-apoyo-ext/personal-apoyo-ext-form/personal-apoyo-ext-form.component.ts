import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalApoyoExteriorDTO } from 'app/shared/models/personal-apoyo-exterior-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-personal-apoyo-ext-form',
  templateUrl: './personal-apoyo-ext-form.component.html',
  styleUrls: ['./personal-apoyo-ext-form.component.scss']
})
export class PersonalApoyoExtFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: PersonalApoyoExteriorDTO;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
    ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      objeto: ['', Validators.required],
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      dependenciaSena: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      institucion: ['', Validators.required],
      asesor: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("personalApoyo"));
    if (this.dataEdit) {
      this.formulario.controls['objeto'].setValue(this.dataEdit.objeto)
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['fechaInicio'].setValue(new Date(this.dataEdit.fechaInicio))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['cargo'].setValue(this.dataEdit.cargo)
      this.formulario.controls['dependenciaSena'].setValue(this.dataEdit.dependenciaSena)
      this.formulario.controls['institucion'].setValue(this.dataEdit.institucion.nombre)
      this.formulario.controls['asesor'].setValue(this.dataEdit.asesor.id)


      this.isEdit = true;
    }
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      const json: PersonalApoyoExteriorDTO = {
        objeto: this.formulario.value.objeto,
        nombre: this.formulario.value.nombre,
        cargo: this.formulario.value.cargo,
        dependenciaSena: this.formulario.value.dependenciaSena,
        institucion: this.formulario.value.institucion,
        fechaInicio: new Date(this.formulario.value.fechaInicio),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        asesor: {
          id: 1
        }
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/personal-apoyo-ext/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("personalApoyo")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/personal-apoyo-ext/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("personalApoyo")
        })
    }
  }
}
