import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() addNewTask = new EventEmitter<Task>();
  title = '';
  description = '';
  dueDate = '';

  onCancel() {
    this.closeDialog.emit();
  }

  onSubmit() {
    this.addNewTask.emit({
      title: this.title,
      summary: this.description,
      dueDate: this.dueDate,
    });
  }
}
