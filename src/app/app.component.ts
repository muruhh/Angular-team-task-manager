import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MemberComponent } from './member/member.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './Dummy_users';

interface User {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MemberComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedMember: User = { id: 0, name: '', avatar: '' };

  onSelect(user: User) {
    this.selectedMember = user;
  }
}
