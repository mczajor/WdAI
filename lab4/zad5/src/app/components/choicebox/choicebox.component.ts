import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choicebox',
  templateUrl: './choicebox.component.html',
  styleUrls: ['./choicebox.component.css']
})
export class ChoiceboxComponent {

  @Input() text = '';

  @Output() btnClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onClick() {
    this.btnClick.emit(this.text);
  }
}
