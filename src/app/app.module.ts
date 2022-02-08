import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { BsDropdownModule, BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ProfileComponent } from './pages/profile/profile.component';
import { BasePathInterceptor } from './core/interceptors/base-path.interceptor';
import { SidebarModule } from './layouts/sidebar/sidebar.module';

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
  ],
  providers: [
    BsDropdownConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasePathInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
