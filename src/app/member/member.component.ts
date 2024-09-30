import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css',
})
export class MemberComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() select = new EventEmitter();

  get avatarPath() {
    return 'assets/users/' + this.avatar;
  }

  onClick() {
    this.select.emit(this.name);
  }
}
