import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsLoggedGuard } from 'src/app/core/auth/is-logged.guard';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  constructor(private router: Router, private userAuth: IsLoggedGuard) {}

  ngOnInit(): void {
    if (!this.userAuth.canActivate()) {
      this.router.navigateByUrl('/login');
    }
  }
}
