import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AprendicesFormColEditComponent } from '../aprendices-form-col/aprendices-form-col-edit/aprendices-form-col-edit.component';
import { ExpertosIntEditComponent } from './expertos-int-edit/expertos-int-edit.component';
import { ExpertosIntListComponent } from './expertos-int-list/expertos-int-list.component';
import { ExpertosIntComponent } from './expertos-int.component';

const routes: Routes = [
  {
    path: '',
    component: ExpertosIntComponent,
    children: [
      {
        path: 'list-expertos-int',
        component: ExpertosIntListComponent
      },
      {
        path: 'edit-expertos-int',
        component: ExpertosIntEditComponent
      },
      {
        path: 'form-expertos-int',
        component: AprendicesFormColEditComponent
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
