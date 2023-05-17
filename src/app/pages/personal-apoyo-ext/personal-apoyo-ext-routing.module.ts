import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalApoyoExtEditComponent } from './personal-apoyo-ext-edit/personal-apoyo-ext-edit.component';
import { PersonalApoyoExtFormComponent } from './personal-apoyo-ext-form/personal-apoyo-ext-form.component';
import { PersonalApoyoExtListComponent } from './personal-apoyo-ext-list/personal-apoyo-ext-list.component';
import { PersonalApoyoExtComponent } from './personal-apoyo-ext.component';
const routes: Routes = [
  {
    path: '',
    component: PersonalApoyoExtComponent,
    children: [
      {
        path: 'list-personal-apoyo-ext',
        component: PersonalApoyoExtListComponent,
        data: {
          titulo: "Lista De Personal Apoyo Exterior",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'edit-personal-apoyo-ext',
        component: PersonalApoyoExtEditComponent,
        data: {
          titulo: "Editar Personal Apoyo Exterior",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'form-personal-apoyo-ext',
        component: PersonalApoyoExtFormComponent,
        data: {
          titulo: "Formulario Personal Apoyo Exterior",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: "",
        redirectTo: "list-personal-apoyo-ext",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalApoyoExtRoutingModule { }
