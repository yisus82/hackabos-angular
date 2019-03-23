import { Component, Input } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { PostResponse } from 'src/app/dashboard/dashboard.models';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

@Component({
  selector: 'sn-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: PostResponse;
  trash = faTrash;
  like = faFacebook;
  formatDate(date: number) {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(date);
  }
}
