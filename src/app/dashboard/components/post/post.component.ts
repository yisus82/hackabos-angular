import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddComment, Like } from '../../store/post.action';

@Component({
  selector: 'sn-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post;
  @Input() user;

  constructor(private store: Store) {}

  addComment(message) {
    this.store.dispatch(new AddComment(this.post.id, message));
  }

  like() {
    this.store.dispatch(new Like(this.post.id));
  }
}
