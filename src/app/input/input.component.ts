import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() isVisible = false;
  @Output() emailSearched = new EventEmitter<string>();

  handleSearchButton(email: string) {
    this.emailSearched.emit(email);
  }
}
