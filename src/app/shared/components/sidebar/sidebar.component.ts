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
    { path: '/dashboard', title: 'Aprendices Ext.',  icon: 'content_paste', class: '' },
    { path: '/table-list', title: 'Instructores Ext.',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Personal Apoyo Ext.',  icon:'content_paste', class: '' },
    { path: '/icons', title: 'Expertos Internacionales',  icon:'content_paste', class: '' },
    { path: '/maps', title: 'Voluntarios Internacionales',  icon:'content_paste', class: '' },
    { path: '/notifications', title: 'Aprendices Form. Col.',  icon:'content_paste', class: '' },
    { path: '/upgrade', title: 'Instrctores Sena Form. Col',  icon:'content_paste', class: '' },
    { path: '/upgrade', title: 'Voluntarios Sena Form. Col',  icon:'content_paste', class: '' },
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
