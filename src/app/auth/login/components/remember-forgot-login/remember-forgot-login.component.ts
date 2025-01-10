import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CheckboxInputComponent } from "../../../../shared/checkbox-input/checkbox-input.component";
import { AnchorLinkComponent } from "../../../../shared/anchor-link/anchor-link.component";

@Component({
  selector: 'app-remember-forgot-login',
  standalone: true,
  imports: [CheckboxInputComponent, AnchorLinkComponent],
  templateUrl: './remember-forgot-login.component.html',
  styleUrls: ['./remember-forgot-login.component.scss'],
})
export class RememberForgotLoginComponent {
  @Input() rememberMe: boolean = false;
  @Output() rememberMeChange = new EventEmitter<boolean>();

  onRememberMeChange() {
    this.rememberMeChange.emit(this.rememberMe);
  }
}
