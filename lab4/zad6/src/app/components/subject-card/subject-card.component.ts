import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css']
})
export class SubjectCardComponent {
  @Input() title!: string;
  @Input() description: string = '';
  @Output() btnClick = new EventEmitter<string>();

  onClick(){
    this.btnClick.emit(this.title);
  }
}
