import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    UsuariosFormComponent,
    UsuariosListComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule { }
