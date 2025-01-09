import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-input',
  standalone: true,
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.scss'],
})
export class CheckboxInputComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.checked = inputElement.checked;
    this.checkedChange.emit(this.checked);
  }
}
