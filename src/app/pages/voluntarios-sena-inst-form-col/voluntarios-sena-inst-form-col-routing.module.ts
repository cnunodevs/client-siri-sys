import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntariosSenaInstFormColFormComponent } from './voluntarios-sena-inst-form-col-form/voluntarios-sena-inst-form-col-form.component';
import { VoluntariosSenaInstFormColListComponent } from './voluntarios-sena-inst-form-col-list/voluntarios-sena-inst-form-col-list.component';
import { VoluntariosSenaInstFormColComponent } from './voluntarios-sena-inst-form-col.component';

const routes: Routes = [
  {
    path: '',
    component: VoluntariosSenaInstFormColComponent,
    children: [
      {
        path: 'list-voluntarios-sena-inst-form',
        component: VoluntariosSenaInstFormColListComponent
      },
      {
        path: 'form-voluntarios-sena-inst-form',
        component: VoluntariosSenaInstFormColFormComponent
      },
      {
        path: "",
        redirectTo: "list-voluntarios-sena-inst-form",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntariosSenaInstFormColRoutingModule { }
