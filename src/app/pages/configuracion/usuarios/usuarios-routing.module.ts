import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {
        path: 'usuarios-list',
        component: UsuariosListComponent,
        data: {
          titulo: "Lista de aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
        
      },
      {
        path: 'usuarios-form',
        component: UsuariosFormComponent,
        data: {
          titulo: "Editar aprendices Colombia",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
