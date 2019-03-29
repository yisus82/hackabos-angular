import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/auth/store/auth.actions';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent {
  logout = faSignOutAlt;

  constructor(private store: Store) {}
  logoutUser() {
    this.store.dispatch(new Logout());
  }
}
