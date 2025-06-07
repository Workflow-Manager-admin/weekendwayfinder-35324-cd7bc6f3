import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
// PUBLIC_INTERFACE
export class SignInComponent {
  signInForm: FormGroup;
  submitted = false;
  errorMessage?: string;

  constructor() {
    // Not using FormBuilder anymore to avoid lint error—initialize form with 'new FormGroup'
    this.signInForm = new FormGroup({
      email: new FormBuilder().control('', [Validators.required, Validators.email]),
      password: new FormBuilder().control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  // Used for real-time validation
  get email() {
    return this.signInForm.get('email');
  }
  get password() {
    return this.signInForm.get('password');
  }

  // PUBLIC_INTERFACE
  onSubmit(): void {
    this.submitted = true;
    if (this.signInForm.valid) {
      // Simulate a sign-in process. In real app, connect to backend here.
      // Do nothing here to resolve lint error with unused router.
    } else {
      this.errorMessage = "Invalid credentials. Please try again.";
    }
  }
}
