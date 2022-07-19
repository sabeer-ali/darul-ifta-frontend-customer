import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from 'src/app/contact-us/contact-us.component';
import { FatwaAnswerComponent } from '../fatwa-answer/fatwa-answer.component';

import { ProfileComponent } from '../profile/profile.component';
import { AskFatwasComponent } from './ask-fatwas/ask-fatwas.component';
import { FatwasComponent } from './fatwas/fatwas.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserWrapperComponent } from './user-wrapper/user-wrapper.component';

const routes: Routes = [
  // { path: '', component: UserWrapperComponent },
  // { path: '', component: UserDashboardComponent },
  { path: '', component: UserHomeComponent },
  { path: 'ask-fatwas', component: AskFatwasComponent },
  { path: 'user-fatwas', component: FatwasComponent },
  { path: 'question-details/:id', component: QuestionDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardRoutingModule {}
