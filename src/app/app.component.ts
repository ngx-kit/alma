import { Component } from '@angular/core';
import { KitIconsRegistryService } from '@ngx-kit/ngx-kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private icons: KitIconsRegistryService) {
    this.icons.registerSet([
      {
        name: 'star',
        url: '/assets/icons/star.svg',
      },
    ]);
  }
}
