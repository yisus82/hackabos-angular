import { Component, Input } from '@angular/core';
import { PostResponse } from 'src/app/dashboard/dashboard.models';

@Component({
  selector: 'sn-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input() post: PostResponse;
}
