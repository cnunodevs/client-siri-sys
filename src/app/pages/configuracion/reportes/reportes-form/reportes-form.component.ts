import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportesDTO } from 'app/shared/models/reportes-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-reportes-form',
  templateUrl: './reportes-form.component.html',
  styleUrls: ['./reportes-form.component.scss']
})
export class ReportesFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: ReportesDTO;
  formularioEnviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      url: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("reportes");
  }

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("usuarios"));
    if (this.dataEdit) {
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['descripcion'].setValue(this.dataEdit.descripcion)
      this.formulario.controls['url'].setValue(this.dataEdit.url)

      this.isEdit = true;
    }
  }

  estadoFormulario(){
    this.formularioEnviado = false;
  }

  async enviarFormulario() {
    this.formularioEnviado = true;
    if (this.formulario.valid) {
    this.formularioEnviado = false;
      const json: ReportesDTO = {
        id: 0,
        nombre: this.formulario.value.nombre,
        descripcion: this.formulario.value.descripcion,
        url: this.formulario.value.url,
        activo: true
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/reportes/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("reportes")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/reportes/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("reportes")
        })
    }
  }
}
