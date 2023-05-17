import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AprendicesExtEditComponent } from './aprendices-ext-edit/aprendices-ext-edit.component';
import { AprendicesExtFormComponent } from './aprendices-ext-form/aprendices-ext-form.component';
import { AprendicesExtListComponent } from './aprendices-ext-list/aprendices-ext-list.component';
import { AprendicesExtComponent } from './aprendices-ext.component';

const routes: Routes = [
  {
    path: '',
    component: AprendicesExtComponent,
    children: [
      {
        path: 'list-aprendiz-ext',
        component: AprendicesExtListComponent,
        data: {
          titulo: "Lista de aprendices",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'edit-aprendiz-ext',
        component: AprendicesExtEditComponent,
        data: {
          titulo: "Editar aprendices",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'form-aprendiz-ext',
        component: AprendicesExtFormComponent,
        data: {
          titulo: "Formulario de aprendices",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list-aprendiz-ext'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'list-aprendiz-ext'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprendicesExtRoutingModule { }
