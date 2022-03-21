import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/user-home', title: 'Home', icon: 'nc-bank', class: '' },
  {
    path: '/user-home/ask-fatwas',
    title: 'Ask Fatwas',
    icon: 'fa fa-table',
    class: '',
  },
  {
    path: '/user-home/profile',
    title: 'Profile',
    icon: 'fa fa-table',
    class: '',
  },
];

@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private route: Router) {}
  public menuItems: any;
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  handleLogOut() {
    sessionStorage.removeItem('userData');
    this.route.navigateByUrl('/');
  }
}
