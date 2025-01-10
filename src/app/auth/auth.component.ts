import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LoginComponent],  // Asegúrate de incluirlo aquí
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
    this.LoginService.logout();
  }

}
