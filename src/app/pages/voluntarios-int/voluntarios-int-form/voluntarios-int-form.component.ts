import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-voluntarios-int-form',
  templateUrl: './voluntarios-int-form.component.html',
  styleUrls: ['./voluntarios-int-form.component.scss']
})
export class VoluntariosIntFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      objeto: ['', Validators.required],
      centroFormacion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      pais: ['', Validators.required],
      asesor: ['', Validators.required],
      convenio: ['', Validators.required]
    })
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      console.log(this.formulario.value);
    }
  }
}
