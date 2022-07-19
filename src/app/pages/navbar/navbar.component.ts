import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { IsLoggedGuard } from 'src/app/core/auth/is-logged.guard';
import { CommonService } from 'src/app/core/service/common/common.service';
import { QuestionService } from 'src/app/core/service/question/question.service';

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
  searchKey = '';
  url: any;

  constructor(
    private router: Router,
    private isLoggedAuth: IsLoggedGuard,
    private CommonService: CommonService,
    private questionServices: QuestionService,
    private activatedRoute: ActivatedRoute
  ) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.url = e?.url;
      }
    });
  }

  isLogged: any;
  ngOnInit(): void {
    this.isLogged = this.isLoggedAuth.canActivate();
    this.loginDetails = this.CommonService.getLoginDetail();
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

  searchFatwas() {
    console.log('Search Key', this.searchKey);
    let parms = `?key=${this.searchKey}`;

    this.questionServices.getQuestionItem(parms).subscribe((res) => {
      console.log('RESxxxx', res);
    });
  }
}
