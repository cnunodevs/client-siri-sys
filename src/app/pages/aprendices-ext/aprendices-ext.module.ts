import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprendicesExtRoutingModule } from './aprendices-ext-routing.module';
import { AprendicesExtListComponent } from './aprendices-ext-list/aprendices-ext-list.component';
import { AprendicesExtFormComponent } from './aprendices-ext-form/aprendices-ext-form.component';
import { AprendicesExtEditComponent } from './aprendices-ext-edit/aprendices-ext-edit.component';
import { AprendicesExtComponent } from './aprendices-ext.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AprendicesExtListComponent,
    AprendicesExtFormComponent,
    AprendicesExtEditComponent,
    AprendicesExtComponent
  ],
  imports: [
    CommonModule,
    AprendicesExtRoutingModule,
    SharedModule
  ]
})
export class AprendicesExtModule { }
