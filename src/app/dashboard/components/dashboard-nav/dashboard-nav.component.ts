import { Component } from '@angular/core';

@Component({
  selector: 'sn-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent {
  logoutUser() {
    console.log('Logout');
  }
}
