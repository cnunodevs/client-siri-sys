import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AprendicesFormadosColDTO } from 'app/shared/models/aprendices-formados-col-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-aprendices-form-col-form',
  templateUrl: './aprendices-form-col-form.component.html',
  styleUrls: ['./aprendices-form-col-form.component.scss']
})
export class AprendicesFormColFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: AprendicesFormadosColDTO;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
    ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      documento: ['', Validators.required],
      programaFormacion: ['', Validators.required],
      instructor: ['', Validators.required],
      objetoTransferencia: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      convenio: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("aprendizForm"));
    if (this.dataEdit) {
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['apellido'].setValue(this.dataEdit.apellido)
      this.formulario.controls['documento'].setValue(this.dataEdit.documento)
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['fechaInicial'].setValue(new Date(this.dataEdit.fechaInicial))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['programaFormacion'].setValue(this.dataEdit.programaFormacion)
      this.formulario.controls['instructor'].setValue(this.dataEdit.instructor)
      this.formulario.controls['objetoTransferencia'].setValue(this.dataEdit.objetoTransferencia)
      this.formulario.controls['convenio'].setValue(this.dataEdit.convenio.codigo)

      this.isEdit = true;
    }
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      const json: AprendicesFormadosColDTO = {
        documento: this.formulario.value.documento,
        nombre: this.formulario.value.nombre,
        instructor: this.formulario.value.instructor,
        apellido: this.formulario.value.apellido,
        objetoTransferencia: this.formulario.value.objetoTransferencia,
        programaFormacion: this.formulario.value.programaFormacion,
        fechaInicial: new Date(this.formulario.value.fechaInicial),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        convenio: {
          id: 1
        }
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/aprendices-formados-col/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/aprendices-formados-col/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
        })
    }
  }
}
