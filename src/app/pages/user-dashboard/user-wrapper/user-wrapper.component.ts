import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-wrapper',
  templateUrl: './user-wrapper.component.html',
  styleUrls: ['./user-wrapper.component.scss'],
})
export class UserWrapperComponent implements OnInit {
  constructor(private routes: Router) {}

  ngOnInit(): void {
    this.routes.navigateByUrl('/user-home');
  }
}
