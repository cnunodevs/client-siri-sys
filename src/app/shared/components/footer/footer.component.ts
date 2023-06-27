import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/auth/models/usuario';
import { TokenService } from 'app/auth/service/token/token.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
// active-pro
export const ROUTES: RouteInfo[] = [
  { path: '/admin/aprendiz-ext/form-aprendiz-ext', title: 'Aprendices',  icon: 'content_paste', class: '' },
  { path: '/admin/instructores-ext/form-instructores-ext', title: 'Instructores',  icon:'content_paste', class: '' },
  { path: '/admin/personal-apoyo-ext/form-personal-apoyo-ext', title: 'Personal',  icon:'content_paste', class: '' },
  { path: '/admin/expertos-int/form-expertos-int', title: 'Expertos',  icon:'content_paste', class: '' },
  { path: '/admin/voluntarios-int/form-voluntarios-int', title: 'Voluntarios',  icon:'content_paste', class: '' },
  { path: '/admin/aprendiz-col/form-aprendiz-col', title: 'Aprendices',  icon:'content_paste', class: '' },
  { path: '/admin/instructores-sena-col/form-instructores-int', title: 'Instructores',  icon:'content_paste', class: '' },
  { path: '/admin/voluntarios-form-col/form-voluntarios-sena-form', title: 'Voluntarios Apren',  icon:'content_paste', class: '' },
  { path: '/admin/voluntarios-form-inst-col/form-voluntarios-sena-inst-form', title: 'Voluntarios Inst',  icon:'content_paste', class: '' },
  // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  token: Usuario;
  test: Date = new Date();
  menuItems: any[];

  constructor(
    private _tokenService: TokenService,
  ) { 
    this.token = this._tokenService.decodeToken();
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
