import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { username: '', password: '' };
  message: string | null = null;  // General message property

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.loginService.login(this.loginData).subscribe(
      response => {
        this.message = 'Login successful!';
        setTimeout(() => {
          this.message = null;  // Clear the message after 2 seconds
          this.router.navigate(['/dashboard']);  // Redirect to dashboard
        }, 2000);  // Wait for 2 seconds before clearing the message and redirecting
      },
      error => {
        this.message = 'Login failed. Please check your username and password.';
        setTimeout(() => this.message = null, 2000);  // Clear the message after 2 seconds
      }
    );
  }
}
