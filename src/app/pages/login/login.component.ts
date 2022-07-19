import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { UserService } from 'src/app/core/service/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private titlePage: Title,
    private authService: SocialAuthService,
    private userAuthService: UserService,
    private route: Router
  ) {}

  user: any;
  email: any;
  pasword: any;
  userDetails: any;
  error = {
    message: '',
  };

  ngOnInit(): void {
    this.titlePage.setTitle('Login');
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('User', user);
    });
  }

  async getPasswordValidate() {
    try {
      let payload = {
        email: this.email,
        password: this.pasword,
      };
      this.userAuthService.postLogin(payload).subscribe((res) => {
        console.log('Res', res);
        if (res.status) {
          sessionStorage.setItem('userData', JSON.stringify(res.data));
          this.route.navigateByUrl('/user-home');
        } else {
          this.error.message = res.message;
        }
        setTimeout(() => {
          this.error.message = '';
        }, 2000);
      });
    } catch (err) {
      console.log('Errrr', err);
    }
  }

  getEmailValidate() {
    this.userAuthService
      .getEmailValidate(`?email=${this.email}`)
      .subscribe((res) => {
        console.log('Res', res);
        if (res.status) {
          this.userDetails = res?.data;
        } else {
          this.error.message = res.message;
        }
      });

    setTimeout(() => {
      this.error.message = '';
    }, 2000);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x) => {
      this.userAuthService.postUserGoogleAuth(x).subscribe((res) => {
        sessionStorage.setItem('userData', JSON.stringify(res));
        this.route.navigateByUrl('/user-home');
      });
    });
  }

  signInWithFB(): void {
    this.authService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((x) => console.log('signInWithFB ==== >', x));
  }

  signOut(): void {
    this.authService.signOut();
  }

  getName(name: string) {
    console.log('NAME', name);
    return (
      name?.split(' ')[0]?.charAt(0).toUpperCase() +
      name?.split(' ')[1]?.charAt(0).toUpperCase()
    );
  }
}

// sabeerali099@gmail.com
