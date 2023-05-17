import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-aprendices-ext-form',
  templateUrl: './aprendices-ext-form.component.html',
  styleUrls: ['./aprendices-ext-form.component.scss']
})
export class AprendicesExtFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [''],
      objetoFormacion: ['', Validators.required],
      programaFormacion: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      pais: ['', Validators.required],
      institucion: ['', Validators.required],
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
