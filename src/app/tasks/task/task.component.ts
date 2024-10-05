import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  id: string;
  userId: number;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() markAsDone = new EventEmitter();

  onDone() {
    this.markAsDone.emit(this.task.id);
  }
}
