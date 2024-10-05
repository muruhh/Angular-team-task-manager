import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../Dummy_tasks';
import { TaskComponent } from './task/task.component';

interface User {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedMember!: User;

  tasks = DUMMY_TASKS;

  getTasks() {
    // return this.member.filter();
  }
}
