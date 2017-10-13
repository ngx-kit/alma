import { NgModule } from '@angular/core';
import { KitButtonModule } from './kit-button/kit-button.module';
import { KitCustomSelectModule } from './kit-custom-select/kit-custom-select.module';
import { KitInputModule } from './kit-input/kit-input.module';
import { KitPhotoCarouselModule } from './kit-photo-carousel/kit-photo-carousel.module';
import { KitQtInputModule } from './kit-qt-input/kit-qt-input.module';
import { KitRatingModule } from './kit-rating/kit-rating.module';
import { KitSelectModule } from './kit-select/kit-select.module';
import { KitSideMenuModule } from './kit-side-menu/kit-side-menu.module';
import { KitSliderModule } from './kit-slider/kit-slider.module';
import { KitTextareaModule } from './kit-textarea/kit-textarea.module';

const mods = [
  KitButtonModule,
  KitCustomSelectModule,
  KitInputModule,
  KitPhotoCarouselModule,
  KitQtInputModule,
  KitRatingModule,
  KitSelectModule,
  KitSideMenuModule,
  KitSliderModule,
  KitTextareaModule,
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
