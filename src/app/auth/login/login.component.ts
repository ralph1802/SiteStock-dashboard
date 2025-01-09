import { Component } from '@angular/core';
import { LogoLoginComponent } from "./components/logo-login/logo-login.component";
import { FormsLoginComponent } from "./components/forms-login/forms-login.component";
import { RememberForgotLoginComponent } from "./components/remember-forgot-login/remember-forgot-login.component";
import { ButtonsLoginComponent } from "./components/buttons-login/buttons-login.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoLoginComponent, FormsLoginComponent, RememberForgotLoginComponent, ButtonsLoginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
}
