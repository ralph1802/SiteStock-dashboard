import { Component } from '@angular/core';
import { CheckboxInputComponent } from "../../../../shared/checkbox-input/checkbox-input.component";
import { AnchorLinkComponent } from "../../../../shared/anchor-link/anchor-link.component";

@Component({
  selector: 'app-remember-forgot-login',
  standalone: true,
  imports: [CheckboxInputComponent, AnchorLinkComponent],
  templateUrl: './remember-forgot-login.component.html',
  styleUrl: './remember-forgot-login.component.scss'
})
export class RememberForgotLoginComponent {

}
