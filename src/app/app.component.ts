import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { GlobalState } from './shared/state/global.state';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(GlobalState.isFetching) isFetching$;

  title = 'Hola soy Yago';

  constructor() {}

  onClick(event) {
    console.log(event);
  }
}
