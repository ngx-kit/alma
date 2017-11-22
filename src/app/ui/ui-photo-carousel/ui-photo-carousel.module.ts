import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/core';
import { UiPhotoCarouselSlideComponent } from './ui-photo-carousel-slide/ui-photo-carousel-slide.component';
import { UiPhotoCarouselComponent } from './ui-photo-carousel/ui-photo-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    UiPhotoCarouselComponent,
    UiPhotoCarouselSlideComponent,
  ],
  declarations: [
    UiPhotoCarouselComponent,
    UiPhotoCarouselSlideComponent,
  ],
})
export class UiPhotoCarouselModule {
}
