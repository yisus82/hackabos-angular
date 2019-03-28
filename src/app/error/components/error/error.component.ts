import { Component } from '@angular/core';
import { Error } from '../../error.models';
import { Store, Select } from '@ngxs/store';
import { ResetErrors } from '../../store/error.actions';
import { Observable } from 'rxjs';
import { ErrorState } from '../../store/error.state';

@Component({
  selector: 'sn-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Select(ErrorState) errors$: Observable<Error[]>;

  constructor(private store: Store) {}

  getMessageError(error: Error) {
    return error.detail || `Your ${error.data.label} is wrong`;
  }

  resetErrors() {
    this.store.dispatch(new ResetErrors());
  }
}
