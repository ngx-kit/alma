import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { KitOverlayModule } from '@ngx-kit/core';
import { UiModule } from '../ui/ui.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    KitOverlayModule,
    UiModule,
  ],
  declarations: [
    HomePageComponent,
  ],
})
export class HomeModule {
}
