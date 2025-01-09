import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { AnchorLinkComponent } from '../../../../shared/anchor-link/anchor-link.component';

@Component({
  selector: 'app-buttons-login',
  standalone: true,
  imports: [ButtonComponent, AnchorLinkComponent],
  templateUrl: './buttons-login.component.html',
  styleUrls: ['./buttons-login.component.scss']
})
export class ButtonsLoginComponent {
  onPrimaryButtonClick() {
    console.log('Primary button clicked');

  }

  onSecondaryButtonClick() {
    console.log('Secondary button clicked');

  }
}
