import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuTableComponent } from './components/menu-table/menu-table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SubidaFileComponent } from './components/subida-file/subida-file.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HelpIconsComponent } from './components/help-icons/help-icons.component';

const COMPONENTES = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  MenuTableComponent, 
  PaginatorComponent,
  BreadcrumbsComponent,
  LoaderComponent,
  HelpIconsComponent,
  SubidaFileComponent
]
const MODULOS = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  NzAutocompleteModule,
  NzDropDownModule,
  NzNotificationModule,
  NzIconModule,
  NzModalModule,
  NzPopconfirmModule,
  NzTableModule,
  NzFormModule,
  NgxPaginationModule,
  NzCarouselModule,
  NzInputModule,
  NzToolTipModule,
  NzMenuModule
  
]
@NgModule({
  declarations: [...COMPONENTES],
  imports: [
    ...MODULOS
  ],
  exports: [...COMPONENTES,...MODULOS]
})
export class SharedModule { }
