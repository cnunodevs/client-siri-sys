import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertosIntRoutingModule } from './expertos-int-routing.module';
import { RouterModule } from '@angular/router';

import { ExpertosIntEditComponent } from './expertos-int-edit/expertos-int-edit.component';
import { ExpertosIntFormComponent } from './expertos-int-form/expertos-int-form.component';
import { ExpertosIntListComponent } from './expertos-int-list/expertos-int-list.component';
import { ExpertosIntComponent } from './expertos-int.component';
import { SharedModule } from 'app/shared/shared.module';
@NgModule({
  declarations: [
    ExpertosIntFormComponent,
    ExpertosIntListComponent,
    ExpertosIntEditComponent,
    ExpertosIntComponent
  ],
  imports: [
    CommonModule,
    ExpertosIntRoutingModule,
    SharedModule
  ]
})
export class ExpertosIntModule { }
