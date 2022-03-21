import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AskFatwasComponent } from './pages/ask-fatwas/ask-fatwas.component';
import { FatwasComponent } from './pages/fatwas/fatwas.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FatwasListComponent } from './pages/fatwas-list/fatwas-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BasePathInterceptor } from './core/interceptors/base-path.interceptor';
import { SidebarModule } from './layouts/sidebar/sidebar.module';
import { SharedModule } from './shared/shared.module';
import { FatwaAnswerComponent } from './pages/fatwa-answer/fatwa-answer.component';

import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Title } from '@angular/platform-browser';
import { RulesRegulationsComponent } from './pages/rules-regulations/rules-regulations.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
// signin with google, facebook
import { SocialLoginModule } from 'angularx-social-login';
import {
  SocialAuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NavbarComponent,
    AskFatwasComponent,
    FatwasComponent,
    FooterComponent,
    FatwasListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FatwaAnswerComponent,
    RulesRegulationsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule,
    HttpClientModule,
    SidebarModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CarouselModule,
    SocialLoginModule,
    NgbCollapseModule,
    NgbModule,
  ],
  providers: [
    BsDropdownConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasePathInterceptor,
      multi: true,
    },
    Title,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '25200863348-ktb34v7rai8miagiqjin6i54jqj4iskl.apps.googleusercontent.com'
            ),
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('2162866620526952'),
          // },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
