import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpertosIntEditComponent } from './expertos-int-edit/expertos-int-edit.component';
import { ExpertosIntListComponent } from './expertos-int-list/expertos-int-list.component';
import { ExpertosIntFormComponent } from './expertos-int-form/expertos-int-form.component';
import { ExpertosIntComponent } from './expertos-int.component';

const routes: Routes = [
  {
    path: '',
    component: ExpertosIntComponent,
    children: [
      {
        path: 'list-expertos-int',
        component: ExpertosIntListComponent,
        data: {
          titulo: "Lista de Expertos Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'edit-expertos-int',
        component: ExpertosIntEditComponent,
        data: {
          titulo: "Editar Expertos Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: 'form-expertos-int',
        component: ExpertosIntFormComponent,
        data: {
          titulo: "Formulario Expertos Internacionales",
          describcion: "Sistema De Informacion De Relacionamiento Internacional"
        }
      },
      {
        path: "",
        redirectTo: "list-expertos-int",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertosIntRoutingModule { }
