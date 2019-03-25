import { Component, Input } from '@angular/core';
import { PostResponse } from 'src/app/dashboard/dashboard.models';
import { Auth } from 'src/app/auth/auth.models';

@Component({
  selector: 'sn-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: PostResponse;
  @Input() user: Auth;
}
