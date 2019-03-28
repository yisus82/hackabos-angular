import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'sn-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent {
  constructor(private store: Store) {}
  logoutUser() {
    console.log('Logout');
    this.store.dispatch(new Logout());
  }
}
