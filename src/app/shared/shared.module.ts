import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

const COMPONENTES = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent
]

@NgModule({
  declarations: [...COMPONENTES],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTES]
})
export class SharedModule { }
