import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MainHeaderComponent,
  ],
  exports: [
    MainHeaderComponent,
  ],
})
export class HeaderModule {
}
