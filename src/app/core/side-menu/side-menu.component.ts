import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
export interface MenuItem {
  title: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
  @Output() itemPressed = new EventEmitter();
  menuItems: MenuItem[];
  menuItems2: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      {
        title: 'Meet the team',
        link: 'team',
        icon: 'recent_actors',
      },
      // {
      //   title: 'See our products',
      //   link: 'products',
      //   icon: 'shop_two'
      // },
      // {
      //   title: 'Read our blog',
      //   link: 'blog',
      //   icon: 'record_voice_over'
      // }
    ];

    this.menuItems2 = [
      {
        title: 'Neocratium',
        link: 'https://neocratium-dev.firebaseapp.com/',
        icon: 'touch_app',
      },
      {
        title: 'Crowdfunding sites',
        link: 'https://techo-beta.vaki.co/',
        icon: 'verified_user',
      },
    ];
  }
}
