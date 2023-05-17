import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructoresSenaFormColRoutingModule } from './instructores-sena-form-col-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { InstructoresSenaFormColListComponent } from './instructores-sena-form-col-list/instructores-sena-form-col-list.component';
import { InstructoresSenaFormColFormComponent } from './instructores-sena-form-col-form/instructores-sena-form-col-form.component';
import { InstructoresSenaFormColEditComponent } from './instructores-sena-form-col-edit/instructores-sena-form-col-edit.component';
import { InstructoresSenaFormColComponent } from './instructores-sena-form-col.component';


@NgModule({
  declarations: [
    InstructoresSenaFormColListComponent,
    InstructoresSenaFormColFormComponent,
    InstructoresSenaFormColEditComponent,
    InstructoresSenaFormColComponent
  ],
  imports: [
    CommonModule,
    InstructoresSenaFormColRoutingModule,
    SharedModule
  ]
})
export class InstructoresSenaFormColModule { }
