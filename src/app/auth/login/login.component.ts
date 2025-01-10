import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogoLoginComponent } from "./components/logo-login/logo-login.component";
import { FormsLoginComponent } from "./components/forms-login/forms-login.component";
import { RememberForgotLoginComponent } from "./components/remember-forgot-login/remember-forgot-login.component";
import { ButtonsLoginComponent } from "./components/buttons-login/buttons-login.component";
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';
import { LoginErrorMessageComponent } from "../../shared/login-error-message/login-error-message.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LogoLoginComponent,
    FormsLoginComponent,
    RememberForgotLoginComponent,
    ButtonsLoginComponent,
    CommonModule,
    LoginErrorMessageComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading: boolean = false;
  errorMessage: string | null = null;
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  handleLogin() {
    this.isLoading = true;
    this.errorMessage = null;

    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed:', error.message);
        this.errorMessage = 'Invalid email or password';
        this.isLoading = false;
      }
    );
  }
}
