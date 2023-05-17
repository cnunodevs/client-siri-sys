import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntariosSenaInstFormColRoutingModule } from './voluntarios-sena-inst-form-col-routing.module';
import { VoluntariosSenaInstFormColComponent } from './voluntarios-sena-inst-form-col.component';
import { VoluntariosSenaInstFormColFormComponent } from './voluntarios-sena-inst-form-col-form/voluntarios-sena-inst-form-col-form.component';
import { VoluntariosSenaInstFormColListComponent } from './voluntarios-sena-inst-form-col-list/voluntarios-sena-inst-form-col-list.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    VoluntariosSenaInstFormColComponent,
    VoluntariosSenaInstFormColFormComponent,
    VoluntariosSenaInstFormColListComponent,
  ],
  imports: [
    CommonModule,
    VoluntariosSenaInstFormColRoutingModule,
    SharedModule
  ]
})
export class VoluntariosSenaInstFormColModule { }
