import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-error-message',
  standalone: true,
  imports: [],
  templateUrl: './login-error-message.component.html',
  styleUrls: ['./login-error-message.component.scss']
})
export class LoginErrorMessageComponent {
  @Input() errorMessage: string | null = null;
}
