import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../Dummy_tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) member!: string;

  tasks = DUMMY_TASKS;
}
