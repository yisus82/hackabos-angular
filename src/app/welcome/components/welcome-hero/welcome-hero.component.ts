import { Component, OnInit } from '@angular/core';
import { faSearch, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-welcome-hero',
  templateUrl: './welcome-hero.component.html',
  styleUrls: ['./welcome-hero.component.scss']
})
export class WelcomeHeroComponent {
  rows = [
    { icon: faSearch, message: 'Find people like you' },
    { icon: faUsers, message: 'Build your friends network' },
    { icon: faComments, message: 'Keep in touch' }
  ];
}
