import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type!: string;
  @Input() label!: string;
  @Input() icon!: string;
  @Output() action = new EventEmitter<void>();

  onClick() {
    this.action.emit();
  }
}
