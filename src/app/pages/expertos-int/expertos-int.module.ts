import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertosIntRoutingModule } from './expertos-int-routing.module';
import { ExpertosIntFormComponent } from './expertos-int-form/expertos-int-form.component';
import { ExpertosIntListComponent } from './expertos-int-list/expertos-int-list.component';
import { ExpertosIntEditComponent } from './expertos-int-edit/expertos-int-edit.component';


@NgModule({
  declarations: [
    ExpertosIntFormComponent,
    ExpertosIntListComponent,
    ExpertosIntEditComponent
  ],
  imports: [
    CommonModule,
    ExpertosIntRoutingModule
  ]
})
export class ExpertosIntModule { }
