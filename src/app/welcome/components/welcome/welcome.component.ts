import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faUsers,
  faComments
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  rows = [
    { id: 1, icon: faSearch, message: 'Find people like you' },
    { id: 2, icon: faUsers, message: 'Build you friends network' },
    { id: 3, icon: faComments, message: 'Keep in touch' }
  ];
}
