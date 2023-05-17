import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VoluntariosIntListComponent } from './voluntarios-int-list/voluntarios-int-list.component';
import { VoluntariosIntEditComponent } from './voluntarios-int-edit/voluntarios-int-edit.component';
import { VoluntariosIntFormComponent } from './voluntarios-int-form/voluntarios-int-form.component';
import { VoluntariosIntComponent } from './voluntarios-int.component';
const routes: Routes = [
  {
    path: '',
    component: VoluntariosIntComponent,
    children: [
      {
        path: 'list-voluntarios-int',
        component: VoluntariosIntListComponent,
        data: {
          titulo: "Lista De Voluntarios Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'edit-voluntarios-int',
        component: VoluntariosIntEditComponent,
        data: {
          titulo: "Editar Voluntarios Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'form-voluntarios-int',
        component: VoluntariosIntFormComponent,
        data: {
          titulo: "Formulario Voluntarios Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: "",
        redirectTo: "list-voluntarios-int",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntariosIntRoutingModule { }
