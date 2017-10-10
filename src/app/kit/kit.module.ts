import { NgModule } from '@angular/core';
import { KitButtonModule } from './kit-button/kit-button.module';
import { KitPhotoCarouselModule } from './kit-photo-carousel/kit-photo-carousel.module';
import { KitQtInputModule } from './kit-qt-input/kit-qt-input.module';
import { KitRatingModule } from './kit-rating/kit-rating.module';

const mods = [
  KitButtonModule,
  KitPhotoCarouselModule,
  KitQtInputModule,
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
