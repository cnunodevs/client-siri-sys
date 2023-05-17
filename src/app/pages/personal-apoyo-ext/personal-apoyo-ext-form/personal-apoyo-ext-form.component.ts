import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-apoyo-ext-form',
  templateUrl: './personal-apoyo-ext-form.component.html',
  styleUrls: ['./personal-apoyo-ext-form.component.scss']
})
export class PersonalApoyoExtFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [''],
      objeto: ['', Validators.required],
      nombre: ['', Validators.required],
      cargo: ['', Validators.required],
      dependenciaSena: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      institucion: ['', Validators.required],
      asesor: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      console.log(this.formulario.value);
    }
  }
}
