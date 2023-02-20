import { Component } from '@angular/core';

@Component({
  selector: 'app-event-signup',
  templateUrl: './event-signup.component.html',
  styleUrls: ['./event-signup.component.css'],
})
export class EventSignupComponent {
  signUpMail: string = '';

  onSubmit(): void {
    console.log('Form submitted');
  }
}
