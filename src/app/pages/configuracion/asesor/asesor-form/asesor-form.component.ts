import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AsesorDTO } from 'app/shared/models/asesor-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-asesor-form',
  templateUrl: './asesor-form.component.html',
  styleUrls: ['./asesor-form.component.scss']
})
export class AsesorFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: AsesorDTO;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      profesion: ['', Validators.required],
      detalleAsesoramiento: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("asesor"));
    if (this.dataEdit) {
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['apellido'].setValue(this.dataEdit.apellido)
      this.formulario.controls['profesion'].setValue(this.dataEdit.profesion)
      this.formulario.controls['detalleAsesoramiento'].setValue(this.dataEdit.detalleAsesoramiento)

      this.isEdit = true;
    }
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      const json: AsesorDTO = {
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        profesion: this.formulario.value.profesion,
        detalleAsesoramiento: this.formulario.value.detalleAsesoramiento,
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/asesores/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("asesor")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/asesores/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("asesor")
        })
    }
  }
}
