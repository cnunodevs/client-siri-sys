import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'app/auth/service/token/token.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formulario: FormGroup;
  
  constructor( 
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService,
    private _tokenService: TokenService,
    private router: Router
  ) {
    this.formulario = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(21)]]
      }
    )
   }

  ngOnInit(): void {
  }
  async enviarFormulario() {
    if (this.formulario.valid) {
      const json = {
        username: this.formulario.value.username,
        password: this.formulario.value.password
      }
      // Aquí puedes hacer lo que necesites con los datos del formulario
      const response: any = await this._peticionesService.postDatos("api/v1/auth", json);
      if (response) {
        this._tokenService.setToken(response.token);
        this.router.navigate(['/admin'])
      }
    }
  }
}
