import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  message: string | null = null;
  isError = false;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/) // At least one uppercase, one lowercase, one digit, one special character
      ]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      this.message = 'Please fill out the form correctly.';
      this.isError = true;
      setTimeout(() => this.message = null, 2000); // Clear message after 2 seconds
      return;
    }

    this.registerService.register(this.registrationForm.value).subscribe(
      response => {
        this.message = 'Registration successful!';
        this.isError = false;
        setTimeout(() => this.router.navigate(['/login']), 2000); // Redirect after 2 seconds
      },
      error => {
        this.message = 'Registration failed. Please try again.';
        this.isError = true;
        setTimeout(() => this.message = null, 2000); // Clear message after 2 seconds
      }
    );
  }
}
