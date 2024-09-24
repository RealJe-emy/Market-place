import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from './login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  message: string | null = null; // General message property
  isError = false;
registrationForm: any;

  constructor(
    private fb: FormBuilder,
    private loginService: Login,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Form',
        text: 'Please enter a valid email and password.',
        timer: 3000,
        showConfirmButton: false
      });
      return;
    }  
    const { email, password } = this.loginForm.value;  
    try {
      await this.loginService.login(email, password);
      
      Swal.fire({
        icon: 'success',
        title: 'Login successful!',
        text: 'Redirecting to landing page...',
        timer: 2000,
        showConfirmButton: false
      });
  
      // Redirect to landing page after 2 seconds
      setTimeout(() => {
        this.router.navigate(['/landing']);
      }, 2000);
  
    } catch (error: any) {
      // Handle login failure
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: error.message || 'Please check your email and password.',
        timer: 3000,
        showConfirmButton: false
      });

      
      this.isError = true; // Set error flag
      this.message = error.message; // Store error message for display
    }
  }
}
