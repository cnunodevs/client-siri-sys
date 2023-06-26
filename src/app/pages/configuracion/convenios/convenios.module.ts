import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveniosRoutingModule } from './convenios-routing.module';
import { ConveniosFormComponent } from './convenios-form/convenios-form.component';
import { ConveniosListComponent } from './convenios-list/convenios-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { ConveniosComponent } from './convenios.component';


@NgModule({
  declarations: [
    ConveniosFormComponent,
    ConveniosListComponent,
    ConveniosComponent
  ],
  imports: [
    CommonModule,
    ConveniosRoutingModule,
    SharedModule
  ]
})
export class ConveniosModule { }
