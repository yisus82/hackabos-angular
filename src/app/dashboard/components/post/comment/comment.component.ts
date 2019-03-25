import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/dashboard/dashboard.models';

@Component({
  selector: 'sn-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: Comment;
}
