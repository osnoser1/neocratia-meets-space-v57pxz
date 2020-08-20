import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() togleMenu = new EventEmitter();

  navItems = [
    {
      name: 'WHY',
      link: '#why',
    },
    {
      name: 'HOW',
      link: '#how',
    },
    {
      name: 'WHAT',
      link: '#what',
    },
  ];

  onClick() {
    this.togleMenu.emit();
  }
}
