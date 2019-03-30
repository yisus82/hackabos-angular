import { Component, OnDestroy } from '@angular/core';
import { Error } from '../../error.models';
import { Store, Select } from '@ngxs/store';
import { ResetErrors } from '../../store/error.actions';
import { Observable } from 'rxjs';
import { ErrorState } from '../../store/error.state';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-errors',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnDestroy {
  @Select(ErrorState) errors$: Observable<Error[]>;

  constructor(private store: Store) {}
  closeIcon = faTimesCircle;

  resetErrors() {
    this.store.dispatch(new ResetErrors());
  }

  getErrorMessage({ detail, data }: Error) {
    if (detail) {
      return detail;
    }

    if (data) {
      return `You ${data.label} is wrong`;
    }
  }

  ngOnDestroy() {
    this.store.dispatch(new ResetErrors());
  }
}
