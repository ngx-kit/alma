import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitIconsModule } from '@ngx-kit/ngx-kit';
import { UiButtonGroupComponent } from './ui-button-group/ui-button-group.component';
import { UiButtonComponent } from './ui-button/ui-button.component';

const exp = [
  UiButtonComponent,
  UiButtonGroupComponent,
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
export class UiButtonModule {
}
