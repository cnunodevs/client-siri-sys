import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoluntariosSenaFormColRoutingModule } from './voluntarios-sena-form-col-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { VoluntariosSenaFormColFormComponent } from './voluntarios-sena-form-col-form/voluntarios-sena-form-col-form.component';
import { VoluntariosSenaFormColListComponent } from './voluntarios-sena-form-col-list/voluntarios-sena-form-col-list.component';
import { VoluntariosSenaFormColEditComponent } from './voluntarios-sena-form-col-edit/voluntarios-sena-form-col-edit.component';
import { VoluntariosSenaFormColComponent } from './voluntarios-sena-form-col.component';


@NgModule({
  declarations: [
    VoluntariosSenaFormColFormComponent,
    VoluntariosSenaFormColListComponent,
    VoluntariosSenaFormColEditComponent,
    VoluntariosSenaFormColComponent
  ],
  imports: [
    CommonModule,
    VoluntariosSenaFormColRoutingModule,
    SharedModule
  ]
})
export class VoluntariosSenaFormColModule { }
