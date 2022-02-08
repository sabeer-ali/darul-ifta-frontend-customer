import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AskFatwasComponent } from './ask-fatwas/ask-fatwas.component';
import { FatwasComponent } from './fatwas/fatwas.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SidebarModule } from 'src/app/layouts/sidebar/sidebar.module';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserHomeComponent,
    AskFatwasComponent,
    FatwasComponent,
    ProfileComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    RouterModule,
    SidebarModule,
  ],
})
export class UserDashboardModule {}
