import { NgModule } from '@angular/core';
import { UiButtonModule } from './ui-button/ui-button.module';
import { UiPhotoCarouselModule } from './ui-photo-carousel/ui-photo-carousel.module';
import { UiQtInputModule } from './ui-qt-input/ui-qt-input.module';
import { UiSideMenuModule } from './ui-side-menu/ui-side-menu.module';

const mods = [
  UiButtonModule,
  UiPhotoCarouselModule,
  UiQtInputModule,
  UiSideMenuModule,
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
export class UiModule {
}
