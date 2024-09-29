import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MemberComponent } from './member/member.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MemberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
