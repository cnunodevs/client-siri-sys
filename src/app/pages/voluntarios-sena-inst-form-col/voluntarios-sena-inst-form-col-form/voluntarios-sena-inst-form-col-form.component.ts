import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-voluntarios-sena-inst-form-col-form',
  templateUrl: './voluntarios-sena-inst-form-col-form.component.html',
  styleUrls: ['./voluntarios-sena-inst-form-col-form.component.scss']
})
export class VoluntariosSenaInstFormColFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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

  enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      console.log(this.formulario.value);
    }
  }
}
