import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sn-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  register() {
    if (this.registerForm.valid) {
      this.authService
        .register(this.registerForm.value)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }
}
