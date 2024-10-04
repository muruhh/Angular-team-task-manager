import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../Dummy_tasks';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) member!: string;

  tasks = DUMMY_TASKS;
}
