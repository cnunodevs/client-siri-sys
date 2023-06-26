import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { PaisesComponent } from './paises.component';


@NgModule({
  declarations: [
    PaisesListComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    SharedModule
  ]
})
export class PaisesModule { }
