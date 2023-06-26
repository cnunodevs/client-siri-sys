import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VoluntarioInternacionalesColDTO } from 'app/shared/models/voluntario-internacionales-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-int-form',
  templateUrl: './voluntarios-int-form.component.html',
  styleUrls: ['./voluntarios-int-form.component.scss']
})
export class VoluntariosIntFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: VoluntarioInternacionalesColDTO;

  constructor(
    private formBuilder: FormBuilder,
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

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("personalApoyo"));
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
        pais: {
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
