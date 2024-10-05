import { Component, Input, ɵDeferBlockConfig } from '@angular/core';
import { DUMMY_TASKS } from '../Dummy_tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface NewTask {
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedMember!: User;
  openForm: boolean = false;

  tasks = DUMMY_TASKS;

  get selectedTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedMember.id);
  }

  openNewTaskForm() {
    this.openForm = true;
  }

  closeNewTaskForm() {
    this.openForm = false;
  }

  onAddNewTask(newTask: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.selectedMember.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });

    this.openForm = false;
  }
}
