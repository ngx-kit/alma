import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitIconsModule } from '@ngx-kit/ngx-kit';
import { KitButtonGroupComponent } from './kit-button-group/kit-button-group.component';
import { KitButtonComponent } from './kit-button/kit-button.component';

const exp = [
  KitButtonComponent,
  KitButtonGroupComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitIconsModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
  ],
  providers: [],
})
export class KitButtonModule {
}
