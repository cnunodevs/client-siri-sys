import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructoresExtRoutingModule } from './instructores-ext-routing.module';
import { InstructoresExtEditComponent } from './instructores-ext-edit/instructores-ext-edit.component';
import { InstructoresExtFormComponent } from './instructores-ext-form/instructores-ext-form.component';
import { InstructoresExtListComponent } from './instructores-ext-list/instructores-ext-list.component';


@NgModule({
  declarations: [
    InstructoresExtEditComponent,
    InstructoresExtFormComponent,
    InstructoresExtListComponent
  ],
  imports: [
    CommonModule,
    InstructoresExtRoutingModule
  ]
})
export class InstructoresExtModule { }
