import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

const COMPONENTES = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent
]
const MODULOS = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  NzAutocompleteModule,
  NzDropDownModule,
  NzNotificationModule,
  NzModalModule,
  NzPopconfirmModule,
  NzTableModule
]
@NgModule({
  declarations: [...COMPONENTES],
  imports: [
    ...MODULOS
  ],
  exports: [...COMPONENTES,...MODULOS]
})
export class SharedModule { }
