import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainFooterComponent } from './main-footer/main-footer.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MainFooterComponent,
  ],
  exports: [
    MainFooterComponent,
  ],
})
export class FooterModule {
}
