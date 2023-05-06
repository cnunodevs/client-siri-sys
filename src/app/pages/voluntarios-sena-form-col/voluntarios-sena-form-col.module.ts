import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntariosSenaFormColRoutingModule } from './voluntarios-sena-form-col-routing.module';
import { VoluntariosSenaFormColFormComponent } from './voluntarios-sena-form-col-form/voluntarios-sena-form-col-form.component';
import { VoluntariosSenaFormColListComponent } from './voluntarios-sena-form-col-list/voluntarios-sena-form-col-list.component';
import { VoluntariosSenaFormColEditComponent } from './voluntarios-sena-form-col-edit/voluntarios-sena-form-col-edit.component';


@NgModule({
  declarations: [
    VoluntariosSenaFormColFormComponent,
    VoluntariosSenaFormColListComponent,
    VoluntariosSenaFormColEditComponent
  ],
  imports: [
    CommonModule,
    VoluntariosSenaFormColRoutingModule
  ]
})
export class VoluntariosSenaFormColModule { }
