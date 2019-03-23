import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardAsideComponent } from './components/dashboard-aside/dashboard-aside.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { FriendsComponent } from './containers/friends/friends.component';
import { MyAccountComponent } from './containers/my-account/my-account.component';
import { WallComponent } from './containers/wall/wall.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAsideComponent,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    DashboardNavComponent,
    FriendsComponent,
    MyAccountComponent,
    WallComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, FontAwesomeModule]
})
export class DashboardModule {}
