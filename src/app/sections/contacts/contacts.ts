import { Component } from '@angular/core';
import { Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts {

  contactForm: ReturnType<FormBuilder['group']>;
  submitting = false;
  success: boolean | null = null;
  errorText: string | null = null;

  constructor (private http: HttpClient, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      // honeypot for spam (hidden field)
      _gotcha: ['']
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid || this.contactForm.value._gotcha) {
      return
    }

    this.submitting = true
    this.success = null
    this.errorText = null

    const payload = {
      name: this.f['name'].value,
    email: this.f['email'].value,
    message: this.f['message'].value
    }

    this.http.post('https://formspree.io/f/mjkoegjg', payload, {
      headers: { 'Accept': "application/json"}
    }).subscribe({
      next: (res: any) => {
        this.success = true;
        this.contactForm.reset();
      },
      error: () => {
        this.success = false;
        this.errorText = 'Failed to send. Please try again later.';
      },
      complete: () => {
        this.submitting = false;
      }
    
    });
  }
}
