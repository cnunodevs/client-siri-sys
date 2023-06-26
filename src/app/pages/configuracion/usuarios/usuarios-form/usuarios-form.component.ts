import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsusarioDTO } from 'app/shared/models/usuarios-dto';
import { PeticionesService } from 'app/shared/services/peticiones.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {
  formulario: FormGroup;
  isEdit: boolean = false;
  dataEdit: UsusarioDTO;

  constructor(
    private formBuilder: FormBuilder,
    private _peticionesService: PeticionesService
  ) {
    this.formulario = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      url: ['', Validators.required],
      activo: ['', Validators.required],
    });
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
        username: this.formulario.value.username,
        password: this.formulario.value.password,
        authority: this.formulario.value.authority,
      }
      if (this.isEdit) {
        json['id'] = this.dataEdit.id;
        await this._peticionesService.postDatos("api/v1/reportes/create", json)
          .then(() => {
            this.formulario.reset();
            this.isEdit = true;
            localStorage.removeItem("reportes")
          })
        return;
      }
      await this._peticionesService.postDatos("api/v1/reportes/create", json)
        .then(() => {
          this.formulario.reset();
          this.isEdit = true;
          localStorage.removeItem("reportes")
        })
    }
  }
}
