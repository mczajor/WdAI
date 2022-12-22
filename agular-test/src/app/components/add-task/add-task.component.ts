import { Component, Output, Input,  EventEmitter } from '@angular/core';;
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  @Input() display!: string;
  text!: string;
  day!: string;
  reminder: boolean = false;
  adress: string = "";
  
  

  onSubmit(){
    if(!this.text){
      alert('Please add a task');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
      adress: this.adress
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
  

}
