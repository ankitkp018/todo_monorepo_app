import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/src/lib/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
  const success = this.auth.login(this.username, this.password);
  if (success) {
    window.location.href = 'http://localhost:4200?auth=true';
  } else {
    this.error = 'Invalid credentials';
  }
}
}