import { Component, Input } from '@angular/core';
import { PostResponse } from 'src/app/dashboard/dashboard.models';

@Component({
  selector: 'sn-comment-counter',
  templateUrl: './comment-counter.component.html',
  styleUrls: ['./comment-counter.component.scss']
})
export class CommentCounterComponent {
  @Input() post: PostResponse;
}
