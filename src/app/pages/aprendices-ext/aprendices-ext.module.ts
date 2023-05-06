import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprendicesExtRoutingModule } from './aprendices-ext-routing.module';
import { AprendicesExtListComponent } from './aprendices-ext-list/aprendices-ext-list.component';
import { AprendicesExtFormComponent } from './aprendices-ext-form/aprendices-ext-form.component';
import { AprendicesExtEditComponent } from './aprendices-ext-edit/aprendices-ext-edit.component';


@NgModule({
  declarations: [
    AprendicesExtListComponent,
    AprendicesExtFormComponent,
    AprendicesExtEditComponent
  ],
  imports: [
    CommonModule,
    AprendicesExtRoutingModule
  ]
})
export class AprendicesExtModule { }
