import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { KitIconsRegistryService, KitPlatformService } from '@ngx-kit/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private icons: KitIconsRegistryService,
              private router: Router,
              private platform: KitPlatformService) {
    this.icons.add([
      {
        name: 'star',
        url: '/assets/icons/star.svg',
      },
      {
        name: 'cart',
        url: '/assets/icons/cart.svg',
      },
      {
        name: 'avatar',
        url: '/assets/icons/avatar.svg',
      },
      {
        name: 'shopping-cart',
        url: '/assets/icons/shopping-cart.svg',
      }, {
        name: 'search',
        url: '/assets/icons/search.svg',
      },
    ]);
    // scroll to top
    this.router.events.subscribe(event => {
      if (this.platform.isBrowser() && event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
