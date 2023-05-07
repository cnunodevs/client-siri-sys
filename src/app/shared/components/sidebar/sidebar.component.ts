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
    { path: '/admin/aprendiz-ext/list-aprendiz-ext', title: 'Aprendices Ext.',  icon: 'content_paste', class: '' },
    { path: '/admin/instructores-ext/list-instructores-ext', title: 'Instructores Ext.',  icon:'content_paste', class: '' },
    { path: '/admin/personal-apoyo-ext/list-personal-apoyo-ext', title: 'Personal Apoyo Ext.',  icon:'content_paste', class: '' },
    { path: '/admin/expertos-int/list-expertos-int', title: 'Expertos Internacionales',  icon:'content_paste', class: '' },
    { path: '/admin/voluntarios-int/list-voluntarios-int', title: 'Voluntarios Internacionales',  icon:'content_paste', class: '' },
    { path: '/admin/aprendiz-col/list-aprendiz-col', title: 'Aprendices Form. Col.',  icon:'content_paste', class: '' },
    { path: '/admin/instructores-sena-col/list-instructores-int', title: 'Instructores Sena Form. Col',  icon:'content_paste', class: '' },
    { path: '/admin/voluntarios-form-col/list-voluntarios-sena-form', title: 'Voluntarios Sena Form. Col',  icon:'content_paste', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
