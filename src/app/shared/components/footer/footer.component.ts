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
  { path: '/dashboard', title: 'Aprendices Ext.', icon: 'content_paste', class: '' },
  { path: '/table-list', title: 'Instructores Ext.', icon: 'content_paste', class: '' },
  { path: '/typography', title: 'Personal Apoyo Ext.', icon: 'content_paste', class: '' },
  { path: '/icons', title: 'Expertos Int.', icon: 'content_paste', class: '' },
  { path: '/maps', title: 'Voluntarios Int.', icon: 'content_paste', class: '' },
  { path: '/notifications', title: 'Aprendices Col.', icon: 'content_paste', class: '' },
  { path: '/upgrade', title: 'Instrctores Col', icon: 'content_paste', class: '' },
  { path: '/upgrade', title: 'Voluntarios Col', icon: 'content_paste', class: '' },
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
