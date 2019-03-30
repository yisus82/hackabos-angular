import { Component, Input } from '@angular/core';
import { Friend } from 'src/app/dashboard/dashboard.models';
import { faPlusCircle, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent {
  @Input() friend: Friend;
  acceptIcon = faPlus;
  addIcon = faPlusCircle;
  removeIcon = faTrashAlt;

  constructor(private router: Router) {}

  navigateToWall(uuid: string) {
    this.router.navigate(['/user', uuid, 'wall']);
  }

  getSearchStatus() {
    const req = this.friend.request;

    if (!req) {
      return 'not-requested';
    } else if (req.confirmedAt) {
      return 'is-friend';
    } else {
      return 'requested';
    }
  }
}
