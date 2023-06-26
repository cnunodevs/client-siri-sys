import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesListComponent } from './reportes-list/reportes-list.component';
import { ReportesFormComponent } from './reportes-form/reportes-form.component';
import { ReportesComponent } from './reportes.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    ReportesListComponent,
    ReportesFormComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    SharedModule
  ]
})
export class ReportesModule { }
