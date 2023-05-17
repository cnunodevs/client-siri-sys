import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalApoyoExtRoutingModule } from './personal-apoyo-ext-routing.module';

import { PersonalApoyoExtEditComponent } from './personal-apoyo-ext-edit/personal-apoyo-ext-edit.component';
import { PersonalApoyoExtFormComponent } from './personal-apoyo-ext-form/personal-apoyo-ext-form.component';
import { PersonalApoyoExtListComponent } from './personal-apoyo-ext-list/personal-apoyo-ext-list.component';
import { PersonalApoyoExtComponent } from './personal-apoyo-ext.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    PersonalApoyoExtEditComponent,
    PersonalApoyoExtFormComponent,
    PersonalApoyoExtListComponent,
    PersonalApoyoExtComponent
  ],
  imports: [
    CommonModule,
    PersonalApoyoExtRoutingModule,
    SharedModule
  ]
})
export class PersonalApoyoExtModule { }
