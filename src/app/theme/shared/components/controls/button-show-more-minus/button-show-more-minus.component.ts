import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-show-more-minus',
  standalone: true,
  imports: [],
  templateUrl: './button-show-more-minus.component.html',
  styleUrl: './button-show-more-minus.component.scss'
})
export class ButtonShowMoreMinusComponent {
  @Input() flagView!: boolean;

  @Output() showMoreMinusEvent: EventEmitter<boolean> = new EventEmitter();

  toggleVisibilityRecursive(flagView: boolean): void {
    this.showMoreMinusEvent.emit(flagView);
  }
}
