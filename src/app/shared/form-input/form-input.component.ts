import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  standalone: true,
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueChange.emit(this.value);
  }
}
