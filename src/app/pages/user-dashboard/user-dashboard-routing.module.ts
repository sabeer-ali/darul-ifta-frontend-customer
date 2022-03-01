import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from 'src/app/contact-us/contact-us.component';

import { ProfileComponent } from '../profile/profile.component';
import { AskFatwasComponent } from './ask-fatwas/ask-fatwas.component';
import { FatwasComponent } from './fatwas/fatwas.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'ask-fatwas', component: AskFatwasComponent },
  { path: 'user-fatwas', component: FatwasComponent },
  { path: 'question-details/:id', component: QuestionDetailsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardRoutingModule {}
