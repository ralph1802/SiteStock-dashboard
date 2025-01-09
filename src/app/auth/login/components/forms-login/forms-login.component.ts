import { Component } from '@angular/core';
import { FormInputComponent } from '../../../../shared/form-input/form-input.component';

@Component({
  selector: 'app-forms-login',
  standalone: true,
  imports: [FormInputComponent],
  templateUrl: './forms-login.component.html',
  styleUrl: './forms-login.component.scss'
})
export class FormsLoginComponent {
  email: string = '';
  password: string = '';
}
