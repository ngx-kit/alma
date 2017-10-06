import { NgModule } from '@angular/core';
import { KitButtonModule } from './button/kit-button.module';
import { KitRatingModule } from './rating/kit-rating.module';

const mods = [
  KitButtonModule,
  KitRatingModule,
];

@NgModule({
  imports: [
    ...mods,
  ],
  declarations: [],
  exports: [
    ...mods,
  ],
  entryComponents: [],
})
export class KitModule {
}
