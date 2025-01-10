import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormInputComponent } from '../../../../shared/form-input/form-input.component';

@Component({
  selector: 'app-forms-login',
  standalone: true,
  imports: [FormInputComponent],
  templateUrl: './forms-login.component.html',
  styleUrls: ['./forms-login.component.scss']
})
export class FormsLoginComponent {
  @Input() email: string = '';
  @Input() password: string = '';
  @Output() emailChange = new EventEmitter<string>();
  @Output() passwordChange = new EventEmitter<string>();

  onEmailChange(value: string) {
    this.email = value;
    this.emailChange.emit(value);
  }

  onPasswordChange(value: string) {
    this.password = value;
    this.passwordChange.emit(value);
  }
}
