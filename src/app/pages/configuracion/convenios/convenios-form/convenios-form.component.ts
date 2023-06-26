import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-convenios-form',
  templateUrl: './convenios-form.component.html',
  styleUrls: ['./convenios-form.component.scss']
})
export class ConveniosFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: ConvenioDTO;

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

  async enviarFormulario() {
    if (this.formulario.valid) {
      const json: ConvenioDTO = {
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
