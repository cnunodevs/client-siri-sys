import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructores-ext-form',
  templateUrl: './instructores-ext-form.component.html',
  styleUrls: ['./instructores-ext-form.component.scss']
})
export class InstructoresExtFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [''],
      no: ['', Validators.required],
      nombre: ['', Validators.required],
      objeto: ['', Validators.required],
      coordinacionAcademica: ['', Validators.required],
      contratista: ['', Validators.required],
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
