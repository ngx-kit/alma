import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitSlideModule } from '@ngx-kit/ngx-kit';
import { KitPhotoCarouselSlideComponent } from './kit-photo-carousel-slide/kit-photo-carousel-slide.component';
import { KitPhotoCarouselComponent } from './kit-photo-carousel/kit-photo-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    KitSlideModule,
  ],
  exports: [
    KitPhotoCarouselComponent,
    KitPhotoCarouselSlideComponent,
  ],
  declarations: [
    KitPhotoCarouselComponent,
    KitPhotoCarouselSlideComponent,
  ],
})
export class KitPhotoCarouselModule {
}
