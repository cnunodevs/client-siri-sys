import { Component, OnInit } from '@angular/core';

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
  { path: '/admin/voluntarios-form-col/form-voluntarios-sena-form', title: 'Voluntarios',  icon:'content_paste', class: '' },
  // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  test: Date = new Date();
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
