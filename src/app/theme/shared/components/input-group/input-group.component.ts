import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { ModelParams } from '../../helpers/types';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.scss'
})
export class InputGroupComponent {
  @Input() labelText: string = '';
  @Input() placeHolder: string = '';
  @Input() control: FormControl | null = null;
  @Input() model: string = '';
  @Input() isValid: boolean = false;
  @Output() eventClick: EventEmitter<null> = new EventEmitter();
  @Input() btnDisabled: boolean = false;
  @Input() controlDisabled: boolean = false;
  @Input() icon: string = 'feather icon-search';
  @Input() type: string = 'text';
  @Output() changeClick: EventEmitter<ModelParams> = new EventEmitter();

  @Input() newButton: {icon: string, color: string} | null = null;
  @Output() newEventClick: EventEmitter<null> = new EventEmitter();


  onSendEvent(): void {
    this.eventClick.emit();
  }

  onNewEventClick(): void {
    this.newEventClick.emit();
  }

  onChange(event: Event): void {
    console.log("🚀 ~ InputGroupComponent ~ onChange ~ event:", event)
    if (this.type === 'file') {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const fileA: File = input.files[0];
        this.changeClick.emit(fileA);
      }
    }
    else {
      const inputElement = event.target as HTMLInputElement;
      const value = inputElement.value;
      this.changeClick.emit(value);
    }
  }
}
