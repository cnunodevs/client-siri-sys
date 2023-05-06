import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructoresSenaFormColRoutingModule } from './instructores-sena-form-col-routing.module';
import { InstructoresSenaFormColListComponent } from './instructores-sena-form-col-list/instructores-sena-form-col-list.component';
import { InstructoresSenaFormColFormComponent } from './instructores-sena-form-col-form/instructores-sena-form-col-form.component';
import { InstructoresSenaFormColEditComponent } from './instructores-sena-form-col-edit/instructores-sena-form-col-edit.component';


@NgModule({
  declarations: [
    InstructoresSenaFormColListComponent,
    InstructoresSenaFormColFormComponent,
    InstructoresSenaFormColEditComponent
  ],
  imports: [
    CommonModule,
    InstructoresSenaFormColRoutingModule
  ]
})
export class InstructoresSenaFormColModule { }
