import { Component, EventEmitter, Input, Output } from '@angular/core';

interface User {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css',
})
export class MemberComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter();

  get avatarPath() {
    return 'assets/users/' + this.user.avatar;
  }

  onClick() {
    this.select.emit(this.user);
  }
}
