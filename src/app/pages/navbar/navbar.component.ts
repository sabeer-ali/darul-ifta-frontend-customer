import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isShown: boolean = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log('router.url', this.router.url);
  }
}
