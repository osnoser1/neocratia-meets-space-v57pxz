import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Output() togleMenu = new EventEmitter();

  navItems = [
    {
      name: 'WHY',
      link: '',
      fragment: 'why',
    },
    {
      name: 'HOW',
      link: '',
      fragment: 'how',
    },
    {
      name: 'WHAT',
      link: '',
      fragment: 'what',
    },
  ];

  onClick() {
    this.togleMenu.emit();
  }
}
