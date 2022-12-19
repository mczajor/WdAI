import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../Car';
import { CARS } from '../../Cars';

@Component({
  selector: 'app-cbox-container',
  templateUrl: './cbox-container.component.html',
  styleUrls: ['./cbox-container.component.css']
})
export class CBoxContainerComponent {
  @Input() selectedItems!: string[];
  @Output() choiceEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  EmitFurther(brand: string) {
    this.choiceEvent.emit(brand);
  }

}
