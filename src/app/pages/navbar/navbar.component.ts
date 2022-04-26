import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { IsLoggedGuard } from 'src/app/core/auth/is-logged.guard';
import { CommonService } from 'src/app/core/service/common/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy, DoCheck {
  isShown: boolean = false;
  isShowMenu = false;
  isCollapsed = true;
  loginDetails: any;

  constructor(
    public router: Router,
    private isLoggedAuth: IsLoggedGuard,
    private CommonService: CommonService
  ) {}

  isLogged: any;
  ngOnInit(): void {
    this.isLogged = this.isLoggedAuth.canActivate();
    this.loginDetails = this.CommonService.getLoginDetail();
    console.log('this.loginDetails', this.loginDetails);
  }

  ngDoCheck() {
    this.isLogged = this.isLoggedAuth.canActivate();
    this.loginDetails = this.CommonService.getLoginDetail();
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

  handleProfile() {
    if (this.isLogged) {
      this.router.navigateByUrl('/user-home/profile');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
