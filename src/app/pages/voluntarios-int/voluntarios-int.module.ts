import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoluntariosIntRoutingModule } from './voluntarios-int-routing.module';

import { VoluntariosIntListComponent } from './voluntarios-int-list/voluntarios-int-list.component';
import { VoluntariosIntEditComponent } from './voluntarios-int-edit/voluntarios-int-edit.component';
import { VoluntariosIntFormComponent } from './voluntarios-int-form/voluntarios-int-form.component';
import { VoluntariosIntComponent } from './voluntarios-int.component';


@NgModule({
  declarations: [
    VoluntariosIntListComponent,
    VoluntariosIntEditComponent,
    VoluntariosIntFormComponent,
    VoluntariosIntComponent
  ],
  imports: [
    CommonModule,
    VoluntariosIntRoutingModule
  ]
})
export class VoluntariosIntModule { }
