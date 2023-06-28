import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-convenios-form',
  templateUrl: './convenios-form.component.html',
  styleUrls: ['./convenios-form.component.scss']
})
export class ConveniosFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: ConvenioDTO;
  formularioEnviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      codigo: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      detalleConvenio: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("convenios");
  }

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("convenios"));
    if (this.dataEdit) {
      this.formulario.controls['codigo'].setValue(this.dataEdit.codigo)
      this.formulario.controls['fechaInicial'].setValue(new Date(this.dataEdit.fechaInicial))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['detalleConvenio'].setValue(this.dataEdit.detalleConvenio)

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
      const json: ConvenioDTO = {
        id: 0,
        codigo: this.formulario.value.codigo,
        fechaInicial: new Date(this.formulario.value.fechaInicial),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        detalleConvenio: this.formulario.value.detalleConvenio,
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/convenios/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("convenios")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/convenios/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("convenios")
        })
    }
  }
}
