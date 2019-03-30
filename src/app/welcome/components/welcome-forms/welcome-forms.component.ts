import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-welcome-forms',
  templateUrl: './welcome-forms.component.html',
  styleUrls: ['./welcome-forms.component.scss']
})
export class WelcomeFormsComponent {
  @Input() index: number;
  forms = [
    {
      id: 0,
      text: 'Register',
      class: 'register-form',
      container: 'register'
    },
    {
      id: 1,
      text: 'Login',
      class: 'login-form',
      container: 'login'
    }
  ];

  constructor(private router: Router) {}

  toggleForm(index: number) {
    this.router.navigate(['/welcome', index]);
  }
}
