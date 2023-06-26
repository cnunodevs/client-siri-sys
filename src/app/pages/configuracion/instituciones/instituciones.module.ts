import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionesRoutingModule } from './instituciones-routing.module';
import { InstitucionesListComponent } from './instituciones-list/instituciones-list.component';
import { InstitucionesFormComponent } from './instituciones-form/instituciones-form.component';
import { SharedModule } from 'app/shared/shared.module';
import { InstitucionesComponent } from './instituciones.component';


@NgModule({
  declarations: [
    InstitucionesListComponent,
    InstitucionesFormComponent,
    InstitucionesComponent
  ],
  imports: [
    CommonModule,
    InstitucionesRoutingModule,
    SharedModule
  ]
})
export class InstitucionesModule { }
