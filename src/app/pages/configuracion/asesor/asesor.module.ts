import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { AsesorListComponent } from './asesor-list/asesor-list.component';
import { AsesorFormComponent } from './asesor-form/asesor-form.component';
import { SharedModule } from 'app/shared/shared.module';
import { AsesorComponent } from './asesor.component';


@NgModule({
  declarations: [
    AsesorListComponent,
    AsesorFormComponent,
    AsesorComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    SharedModule
  ]
})
export class AsesorModule { }
