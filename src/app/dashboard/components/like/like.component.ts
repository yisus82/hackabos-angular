import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input() likeCount: number;
  @Output() like = new EventEmitter();

  likeIcon = faThumbsUp;

  likeClick() {
    this.like.emit();
  }
}
