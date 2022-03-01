import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AskFatwasComponent } from './ask-fatwas/ask-fatwas.component';
import { FatwasComponent } from './fatwas/fatwas.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserHomeComponent,
    AskFatwasComponent,
    FatwasComponent,
    ProfileComponent,
    ContactUsComponent,
    QuestionDetailsComponent,
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    RouterModule,
    SidebarModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class UserDashboardModule {}
