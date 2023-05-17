import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstructoresExtEditComponent } from './instructores-ext-edit/instructores-ext-edit.component';
import { InstructoresExtFormComponent } from './instructores-ext-form/instructores-ext-form.component';
import { InstructoresExtListComponent } from './instructores-ext-list/instructores-ext-list.component';
import { InstructoresExtComponent } from './instructores-ext.component';

const routes: Routes = [
  {
    path: '',
    component: InstructoresExtComponent,
    children: [
      {
        path: 'list-instructores-ext',
        component: InstructoresExtListComponent,
        data: {
          titulo: "Lista De Intructores Exterior",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'edit-instructores-ext',
        component: InstructoresExtEditComponent,
        data: {
          titulo: "Editar Intructores Exterior",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'form-instructores-ext',
        component: InstructoresExtFormComponent,
        data: {
          titulo: "Formulario Intructores Exterior",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: "",
        redirectTo: "list-instructores-ext",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructoresExtRoutingModule { }
