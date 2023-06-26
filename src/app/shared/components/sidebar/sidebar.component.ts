import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'app/auth/service/token/token.service';
import { PeticionesService } from 'app/shared/services/peticiones.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
// active-pro
export const ROUTES: RouteInfo[] = [
    { path: '/admin/aprendiz-ext/list-aprendiz-ext', title: 'Aprendices Ext.',  icon: 'content_paste', class: '' },
    { path: '/admin/instructores-ext/list-instructores-ext', title: 'Instructores Ext.',  icon:'content_paste', class: '' },
    { path: '/admin/personal-apoyo-ext/list-personal-apoyo-ext', title: 'Personal Apoyo Ext.',  icon:'content_paste', class: '' },
    { path: '/admin/expertos-int/list-expertos-int', title: 'Expertos Internacionales',  icon:'content_paste', class: '' },
    { path: '/admin/voluntarios-int/list-voluntarios-int', title: 'Voluntarios Internacionales',  icon:'content_paste', class: '' },
    { path: '/admin/aprendiz-col/list-aprendiz-col', title: 'Aprendices Form. Col.',  icon:'content_paste', class: '' },
    { path: '/admin/instructores-sena-col/list-instructores-int', title: 'Instructores Form. Col',  icon:'content_paste', class: '' },
    { path: '/admin/voluntarios-form-col/list-voluntarios-sena-form', title: 'Voluntarios Form. Col',  icon:'content_paste', class: '' },
    { path: '/admin/voluntarios-form-inst-col/list-voluntarios-sena-inst-form', title: 'Voluntarios Form. Inst Col',  icon:'content_paste', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
];
// active-pro
export const ROUTESFORM: RouteInfo[] = [
  { path: '/admin/aprendiz-ext/form-aprendiz-ext', title: 'Aprendices',  icon: 'content_paste', class: '' },
  { path: '/admin/instructores-ext/form-instructores-ext', title: 'Instructores',  icon:'content_paste', class: '' },
  { path: '/admin/personal-apoyo-ext/form-personal-apoyo-ext', title: 'Personal',  icon:'content_paste', class: '' },
  { path: '/admin/expertos-int/form-expertos-int', title: 'Expertos',  icon:'content_paste', class: '' },
  { path: '/admin/voluntarios-int/form-voluntarios-int', title: 'Voluntarios',  icon:'content_paste', class: '' },
  { path: '/admin/aprendiz-col/form-aprendiz-col', title: 'Aprendices',  icon:'content_paste', class: '' },
  { path: '/admin/instructores-sena-col/form-instructores-int', title: 'Instructores',  icon:'content_paste', class: '' },
  { path: '/admin/voluntarios-form-col/form-voluntarios-sena-form', title: 'Voluntarios Apren',  icon:'content_paste', class: '' },
  { path: '/admin/voluntarios-form-inst-col/form-voluntarios-sena-inst-form', title: 'Voluntarios Inst',  icon:'content_paste', class: '' },
]
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuForm: any[];
  openMap: { [name: string]: boolean } = {
    menuItems: false,
    menuForm: false,
  };
  constructor(
    private _peticionesService: PeticionesService,
    private _tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuForm = ROUTESFORM.filter(menuForm => menuForm);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };


  openMenuItems(value: string): void {
    this.openMap[value] = !this.openMap[value];
  }
  openMenuForm(value: string): void {
    this.openMap[value] = !this.openMap[value];
  }
 
  async logout() {
    // await this._peticionesService.getDatos("api/v1/auth/logout");
    this._tokenService.clearToken();
    this.router.navigate(['/auth/login'])

  }
}
