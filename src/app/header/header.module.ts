import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KitOverlayModule } from '@ngx-kit/core';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    KitOverlayModule,
  ],
  declarations: [
    MainHeaderComponent,
    MainMenuComponent,
  ],
  exports: [
    MainHeaderComponent,
  ],
})
export class HeaderModule {
}
