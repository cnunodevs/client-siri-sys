import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AprendicesExtFormComponent } from '../aprendices-ext/aprendices-ext-form/aprendices-ext-form.component';
import { AprendicesFormColEditComponent } from './aprendices-form-col-edit/aprendices-form-col-edit.component';
import { AprendicesFormColComponent } from './aprendices-form-col.component';
import { AprendicesFormColListComponent } from './aprendices-form-col-list/aprendices-form-col-list.component';

const routes: Routes = [
  {
    path: '',
    component: AprendicesFormColComponent,
    children: [
      {
        path: 'list-aprendiz-col',
        component: AprendicesFormColListComponent
      },
      {
        path: 'edit-aprendiz-col',
        component: AprendicesFormColEditComponent
      },
      {
        path: 'form-aprendiz-col',
        component: AprendicesExtFormComponent
      },
      {
        path: "",
        redirectTo: "list-aprendiz-col",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprendicesFormColRoutingModule { }
