import { NgModule } from '@angular/core';
import { UiButtonModule } from './ui-button/ui-button.module';
import { UiCustomSelectModule } from './ui-custom-select/ui-custom-select.module';
import { UiInputModule } from './ui-input/ui-input.module';
import { UiPhotoCarouselModule } from './ui-photo-carousel/ui-photo-carousel.module';
import { UiQtInputModule } from './ui-qt-input/ui-qt-input.module';
import { UiRatingModule } from './ui-rating/ui-rating.module';
import { UiSelectModule } from './ui-select/ui-select.module';
import { UiSideMenuModule } from './ui-side-menu/ui-side-menu.module';
import { UiSliderModule } from './ui-slider/ui-slider.module';
import { UiTextareaModule } from './ui-textarea/ui-textarea.module';

@NgModule({
  imports: [
    UiButtonModule,
    UiCustomSelectModule,
    UiInputModule,
    UiPhotoCarouselModule,
    UiQtInputModule,
    UiRatingModule,
    UiSelectModule,
    UiSideMenuModule,
    UiSliderModule,
    UiTextareaModule,
  ],
  declarations: [],
  exports: [
    UiButtonModule,
    UiCustomSelectModule,
    UiInputModule,
    UiPhotoCarouselModule,
    UiQtInputModule,
    UiRatingModule,
    UiSelectModule,
    UiSideMenuModule,
    UiSliderModule,
    UiTextareaModule,
  ],
})
export class UiModule {
}
