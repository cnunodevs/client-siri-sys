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
        component: InstructoresExtListComponent
      },
      {
        path: 'edit-instructores-ext',
        component: InstructoresExtEditComponent
      },
      {
        path: 'form-instructores-ext',
        component: InstructoresExtFormComponent
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
