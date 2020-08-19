import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() togleMenu = new EventEmitter();

  navItems = [
    {
      name: 'WHY',
      link: '#why'
    },
    {
      name: 'HOW',
      link: '#how'
    },
    {
      name: 'WHAT',
      link: '#what'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log('Menú presionado');
    this.togleMenu.emit();
  }
}
