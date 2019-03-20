import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sn-welcome-forms',
  templateUrl: './welcome-forms.component.html',
  styleUrls: ['./welcome-forms.component.scss']
})
export class WelcomeFormsComponent {
  index = 0;
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

  toggleForm(index: number) {
    this.index = index;
  }
}
