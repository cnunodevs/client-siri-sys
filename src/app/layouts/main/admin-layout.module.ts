import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { SharedModule } from '../../shared/shared.module';

import { AdminLayoutComponent } from './admin-layout.component';


@NgModule({
  imports: [
    CommonModule,
    AdminLayoutRoutes,
    SharedModule
  ],
  declarations: [
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule {}
