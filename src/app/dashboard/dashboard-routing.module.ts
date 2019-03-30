import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { WallComponent } from './containers/wall/wall.component';
import { FriendsComponent } from './containers/friends/friends.component';
import { MyAccountComponent } from './containers/my-account/my-account.component';
import { AuthGuard } from '../auth/services/auth.guard';
import { PrivateWallComponent } from './components/private-wall/private-wall.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'wall',
        component: WallComponent
      },
      {
        path: 'user/:userId/wall',
        component: WallComponent
      },
      {
        path: 'friends',
        component: FriendsComponent
      },
      {
        path: 'my-account',
        component: MyAccountComponent
      },
      { path: 'user/:userId/private/wall', component: PrivateWallComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
