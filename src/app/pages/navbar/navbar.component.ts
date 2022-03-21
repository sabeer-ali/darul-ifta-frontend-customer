import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IsLoggedGuard } from 'src/app/core/auth/is-logged.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isShown: boolean = false;
  isShowMenu = false;
  isCollapsed = true;

  constructor(public router: Router, private isLoggedAuth: IsLoggedGuard) {}

  isLogged: any;
  ngOnInit(): void {
    this.isLogged = this.isLoggedAuth.canActivate();
  }

  handleLogOut() {
    sessionStorage.removeItem('userData');
    this.isLogged = this.isLoggedAuth.canActivate();
    this.router.navigateByUrl('/');
  }

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  ngOnDestroy(): void {
    this.isLogged = this.isLoggedAuth.canActivate();
  }

  navigate(url: any) {
    this.router.navigateByUrl(url);
    if (this.isCollapsed) this.isCollapsed = !this.isCollapsed;
  }
}
