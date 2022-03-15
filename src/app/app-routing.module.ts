import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { FatwasComponent } from './pages/fatwas/fatwas.component';
import { AskFatwasComponent } from './pages/ask-fatwas/ask-fatwas.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard/user-dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FatwaAnswerComponent } from './pages/fatwa-answer/fatwa-answer.component';
import { RulesRegulationsComponent } from './pages/rules-regulations/rules-regulations.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'ask-fatwas',
    component: AskFatwasComponent,
    data: { title: 'Ask Fatwas' },
  },
  { path: 'fatwas', component: FatwasComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'rules-regulations', component: RulesRegulationsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'answer-details/:id', component: FatwaAnswerComponent },
  {
    path: 'user-home',
    component: UserDashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/user-dashboard/user-dashboard.module').then(
            (m) => m.UserDashboardModule
          ),
        data: { core: { title: 'Dashboard' } },
      },
    ],
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
