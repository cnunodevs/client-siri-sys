import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsusarioDTO } from 'app/shared/models/usuarios-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit, OnDestroy {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: UsusarioDTO;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      authority: ['', Validators.required]
    });
  }
  ngOnDestroy(): void {
    localStorage.removeItem("usuarios");
  }

  ngOnInit() {
    this.dataEdit = JSON.parse(localStorage.getItem("reportes"));
    if (this.dataEdit) {
      this.formulario.controls['username'].setValue(this.dataEdit.username)
      this.formulario.controls['password'].setValue(this.dataEdit.password)
      this.formulario.controls['authority'].setValue(this.dataEdit.authority)

      this.isEdit = true;
    }
  }

  async enviarFormulario() {
    if (this.formulario.valid) {
      const json: UsusarioDTO = {
        id: 0,
        username: this.formulario.value.username,
        password: this.formulario.value.password,
        authority: this.formulario.value.authority,
        enabled: true,
        accountNonLocked: true,
        credentialsNonExpired: true,
        accountNonExpired: true
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/usuarios/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("usuarios")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/usuarios/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("usuarios")
        })
    }
  }
}
