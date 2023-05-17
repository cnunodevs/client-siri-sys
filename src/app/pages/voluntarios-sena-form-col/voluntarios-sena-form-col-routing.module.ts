import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VoluntariosSenaFormColFormComponent } from './voluntarios-sena-form-col-form/voluntarios-sena-form-col-form.component';
import { VoluntariosSenaFormColListComponent } from './voluntarios-sena-form-col-list/voluntarios-sena-form-col-list.component';
import { VoluntariosSenaFormColEditComponent } from './voluntarios-sena-form-col-edit/voluntarios-sena-form-col-edit.component';
import { VoluntariosSenaFormColComponent } from './voluntarios-sena-form-col.component';
const routes: Routes = [
  {
    path: '',
    component: VoluntariosSenaFormColComponent,
    children: [
      {
        path: 'list-voluntarios-sena-form',
        component: VoluntariosSenaFormColListComponent,
        data: {
          titulo: "Lista De Voluntarios Sena Aprendices",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'edit-voluntarios-sena-form',
        component: VoluntariosSenaFormColEditComponent,
        data: {
          titulo: "Editar Voluntarios Sena Aprendices",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'form-voluntarios-sena-form',
        component: VoluntariosSenaFormColFormComponent,
        data: {
          titulo: "Formulario Voluntarios Sena Aprendices",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: "",
        redirectTo: "list-voluntarios-sena-form",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntariosSenaFormColRoutingModule { }
