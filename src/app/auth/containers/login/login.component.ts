import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MailValidator } from '../../validators/mail.validator';

@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, MailValidator]],
      password: ['', [Validators.required]]
    },
    { updateOn: 'blur' }
  );

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  login() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }
}
