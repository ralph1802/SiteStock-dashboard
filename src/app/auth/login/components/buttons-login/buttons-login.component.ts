import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { AnchorLinkComponent } from '../../../../shared/anchor-link/anchor-link.component';

@Component({
  selector: 'app-buttons-login',
  standalone: true,
  imports: [ButtonComponent, AnchorLinkComponent],
  templateUrl: './buttons-login.component.html',
  styleUrls: ['./buttons-login.component.scss'],
})
export class ButtonsLoginComponent {
  @Output() primaryAction = new EventEmitter<void>();
  @Output() secondaryAction = new EventEmitter<void>();

  onPrimaryButtonClick() {
    this.primaryAction.emit();
  }

  onSecondaryButtonClick() {
    this.secondaryAction.emit();
  }
}
