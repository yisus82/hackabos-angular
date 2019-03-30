import { Component, OnInit } from '@angular/core';
import { faSearch, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sn-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  rows = [
    { id: 1, icon: faSearch, message: 'Find people like you' },
    { id: 2, icon: faUsers, message: 'Build you friends network' },
    { id: 3, icon: faComments, message: 'Keep in touch' }
  ];

  index = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(routeParams => {
      this.index = 0 || +routeParams.index;
    });
  }

  ngOnInit() {}
}
