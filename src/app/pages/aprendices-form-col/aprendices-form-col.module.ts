import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprendicesFormColRoutingModule } from './aprendices-form-col-routing.module';
import { AprendicesFormColFormComponent } from './aprendices-form-col-form/aprendices-form-col-form.component';
import { AprendicesFormColListComponent } from './aprendices-form-col-list/aprendices-form-col-list.component';
import { AprendicesFormColEditComponent } from './aprendices-form-col-edit/aprendices-form-col-edit.component';


@NgModule({
  declarations: [
    AprendicesFormColFormComponent,
    AprendicesFormColListComponent,
    AprendicesFormColEditComponent
  ],
  imports: [
    CommonModule,
    AprendicesFormColRoutingModule
  ]
})
export class AprendicesFormColModule { }
