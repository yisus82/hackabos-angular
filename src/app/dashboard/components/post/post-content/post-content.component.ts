import { Component, Input } from '@angular/core';
import { PostResponse } from 'src/app/dashboard/dashboard.models';

@Component({
  selector: 'sn-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent {
  @Input() post: PostResponse;
}
