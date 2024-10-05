import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MemberComponent } from './member/member.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './Dummy_users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MemberComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedMember: number = 0;

  onSelect(id: number) {
    this.selectedMember = id;
    console.log(this.selectedMember);
  }
}
