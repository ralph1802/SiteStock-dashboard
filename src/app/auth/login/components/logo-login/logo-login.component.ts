import { Component } from '@angular/core';
import { LogoComponent } from '../../../../shared/logo/logo.component';

@Component({
  selector: 'app-logo-login',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './logo-login.component.html',
  styleUrl: './logo-login.component.scss'
})
export class LogoLoginComponent {

}
