import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AsesorDTO } from 'app/shared/models/asesor-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-asesor-form',
  templateUrl: './asesor-form.component.html',
  styleUrls: ['./asesor-form.component.scss']
})
export class AsesorFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: AsesorDTO;
  formularioEnviado: boolean = false;

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
  ngOnDestroy(): void {
    localStorage.removeItem("asesor");
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

  estadoFormulario() {
    this.formularioEnviado = false;
  }


  async enviarFormulario() {
    this.formularioEnviado = true;
    if (this.formulario.valid) {
      this.formularioEnviado = false;
      const json: AsesorDTO = {
        id: 0,
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
