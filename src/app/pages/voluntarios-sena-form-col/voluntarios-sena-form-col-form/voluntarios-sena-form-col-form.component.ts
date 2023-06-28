import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConvenioDTO } from 'app/shared/models/convenio-dto';
import { VoluntarioAprendicesFormadosColDTO } from 'app/shared/models/voluntario-aprendices-formados-col-dto';
import { ApiService } from 'app/shared/services/api.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-voluntarios-sena-form-col-form',
  templateUrl: './voluntarios-sena-form-col-form.component.html',
  styleUrls: ['./voluntarios-sena-form-col-form.component.scss']
})
export class VoluntariosSenaFormColFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: VoluntarioAprendicesFormadosColDTO;
  convenios: ConvenioDTO[] = [];
  formularioEnviado: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _apiService: ApiService,
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
  ngOnDestroy(): void {
    localStorage.removeItem("voluntariosForm");
  }

  async ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("voluntariosForm"));
    if (this.dataEdit) {
      this.formulario.controls['nombre'].setValue(this.dataEdit.nombre)
      this.formulario.controls['apellido'].setValue(this.dataEdit.apellido)
      this.formulario.controls['instructor'].setValue(this.dataEdit.instructor)
      this.formulario.controls['objetoTransferencia'].setValue(this.dataEdit.objetoTransferencia)
      this.formulario.controls['fechaInicial'].setValue(new Date(this.dataEdit.fechaInicial))
      this.formulario.controls['fechaFinal'].setValue(new Date(this.dataEdit.fechaFinal))
      this.formulario.controls['documento'].setValue(this.dataEdit.documento)
      this.formulario.controls['programaFormacion'].setValue(this.dataEdit.programaFormacion)
      this.formulario.controls['convenio'].setValue(this.dataEdit.convenio.id)


      this.isEdit = true;
    }
    await this.cargarData();
  }

  async cargarData() {
    await this._apiService.convenios$.subscribe(
      {
        next: (value: ConvenioDTO[]) => {
          this.convenios = value;
        }
      }
    )
  }

  estadoFormulario() {
    this.formularioEnviado = false;
  }

  async enviarFormulario() {
    this.formularioEnviado = true;
    if (this.formulario.valid) {
      this.formularioEnviado = false;
      // Aquí puedes hacer lo que necesites con los datos del formulario
      const json: VoluntarioAprendicesFormadosColDTO = {
        nombre: this.formulario.value.nombre,
        apellido: this.formulario.value.apellido,
        instructor: this.formulario.value.instructor,
        objetoTransferencia: this.formulario.value.objetoTransferencia,
        documento: this.formulario.value.documento,
        fechaInicial: new Date(this.formulario.value.fechaInicial),
        fechaFinal: new Date(this.formulario.value.fechaFinal),
        programaFormacion: this.formulario.value.programaFormacion,
        convenio: {
          id: this.formulario.value.convenio
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
