import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-form-control',
  template: `
    <div
      class="form-control"
      [class.has-error]="control.errors && (control.dirty || control.touched)"
    >
      <ng-content></ng-content>

      <ng-container *ngIf="control.invalid && (control.dirty || control.touched)">
        <p class="error-message" *ngIf="control.hasError('required')">
          <fa-icon [icon]="errorIcon"> </fa-icon> This field is mandatory
        </p>
        <p class="error-message" *ngIf="control.hasError('malformedMail')">
          <fa-icon [icon]="errorIcon"> </fa-icon> This email is invalid
        </p>
      </ng-container>
    </div>
  `
})
export class FormControlComponent {
  @Input() control: FormControl;
  errorIcon: IconProp = faExclamationTriangle;
}
