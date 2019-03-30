import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardAsideComponent } from './components/dashboard-aside/dashboard-aside.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { WallComponent } from './containers/wall/wall.component';
import { FriendsComponent } from './containers/friends/friends.component';
import { MyAccountComponent } from './containers/my-account/my-account.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import { PostState } from './store/post.state';
import { PostComponent } from './components/post/post.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { PostHeadComponent } from './components/post-head/post-head.component';
import { PostBodyComponent } from './components/post-body/post-body.component';
import { LikeComponent } from './components/like/like.component';
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { PostCommentCounterComponent } from './components/post-comment-counter/post-comment-counter.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ErrorModule } from '../error/error.module';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FriendRequestsComponent } from './components/friend-requests/friend-requests.component';
import { FriendsState } from './store/friends.state';
import { PrivateWallComponent } from './components/private-wall/private-wall.component';
import { AuthModule } from '../auth/auth.module';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { FriendComponent } from './components/friend/friend.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavComponent,
    DashboardHeaderComponent,
    DashboardAsideComponent,
    DashboardFooterComponent,
    TimeAgoPipe,
    WallComponent,
    FriendsComponent,
    MyAccountComponent,
    PostComponent,
    PublisherComponent,
    PostHeadComponent,
    PostBodyComponent,
    LikeComponent,
    PostCommentComponent,
    PostCommentCounterComponent,
    FriendRequestsComponent,
    PrivateWallComponent,
    SearchUserComponent,
    FriendComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ErrorModule,
    AuthModule,
    NgxsModule.forFeature([PostState, FriendsState]),
    SharedModule
  ]
})
export class DashboardModule {}
