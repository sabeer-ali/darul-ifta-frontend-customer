import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  constructor() {}

  dashboardDetails = {
    fatwas: 10,
    answersFatwas: 5,
    rejectedFatwas: 3,
  };

  ngOnInit(): void {}
}
