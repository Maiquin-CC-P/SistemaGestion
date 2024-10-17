import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { InputTypeParams, ModelParams } from '../../../helpers/types';
// import { DynamicControlProperties } from '../../../model/helpers/dynamic-control';

@Component({
  selector: 'app-dynamic-control',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dynamic-control.component.html',
  styleUrl: './dynamic-control.component.scss'
})
export class DynamicControlComponent<T> {
  @Input() model!: ModelParams<T>;
  @Input() id!: string;
  @Input() name!: string;
  @Input() type: InputTypeParams = 'checkbox';
  @Input() isDisabled: boolean = false;
  @Input() isValid: boolean = false;
  // @Input() properties: DynamicControlProperties = { id: '', name: '', type: 'checkbox' }
  @Output() modelChange = new EventEmitter<ModelParams>();

  onModelChange(value: ModelParams) {
    this.modelChange.emit(value);
  }

  onChange(value: Event) {
    const input = value.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const fileA: File = input.files[0];
      this.modelChange.emit(fileA);
    }
  }
}
