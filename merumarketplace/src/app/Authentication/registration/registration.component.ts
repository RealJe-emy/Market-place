import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
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
    public afAuth: AngularFireAuth,
    private registerService: RegisterService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registrationForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      
      confirmPassword: [''],
      role: [''], // New role field
      location: [''] // New location field
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
      return;
    }
  
    const { username, email, password, role, location } = this.registrationForm.value;
  
    this.registerService.register(email, password, username, role, location)
      .then(() => {
        this.message = 'Registration successful!';
        this.isError = false;
  
        // Optionally, redirect or reset the form after a successful registration
        setTimeout(() => {
          this.router.navigate(['/login']); // Redirect to login page after 2 seconds
        }, 2000);
      })
      .catch(error => {
        this.message = 'Registration failed: ' + error.message;
        this.isError = true;
        
        // Optionally, clear the message after a few seconds
        setTimeout(() => {
          this.message = null; // Clear message after 3 seconds
        }, 3000);
      });
  }
  
}
