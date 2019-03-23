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
import { NgxsModule } from '@ngxs/store';
import { PostState } from './store/post.state';
import { PostComponent } from './components/post/post.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { PostContentComponent } from './components/post/post-content/post-content.component';
import { LikeComponent } from './components/post/like/like.component';
import { CommentCounterComponent } from './components/post/comment-counter/comment-counter.component';
import { CommentComponent } from './components/post/comment/comment.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAsideComponent,
    DashboardFooterComponent,
    DashboardHeaderComponent,
    DashboardNavComponent,
    FriendsComponent,
    MyAccountComponent,
    WallComponent,
    PublisherComponent,
    PostComponent,
    PostContentComponent,
    LikeComponent,
    CommentCounterComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
    NgxsModule.forFeature([PostState])
  ]
})
export class DashboardModule {}
