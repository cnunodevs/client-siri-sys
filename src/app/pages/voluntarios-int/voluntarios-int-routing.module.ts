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
        component: VoluntariosIntListComponent
      },
      {
        path: 'edit-voluntarios-int',
        component: VoluntariosIntEditComponent
      },
      {
        path: 'form-voluntarios-int',
        component: VoluntariosIntFormComponent
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
