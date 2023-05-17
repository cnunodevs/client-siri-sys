import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formulario: FormGroup;
  
  constructor( 
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.maxLength(8), Validators.maxLength(21)]]
      }
    )
   }

  ngOnInit(): void {
  }
  enviarFormulario(): void{
    if (this.formulario.valid) {
      // Aquí puedes hacer lo que necesites con los datos del formulario
      console.log(this.formulario.value);
    }
  }
}
