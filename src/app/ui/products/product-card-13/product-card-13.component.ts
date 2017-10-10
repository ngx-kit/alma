import { Component } from '@angular/core';
import { KitPhotoCarouselPhoto } from '../../../kit/kit-photo-carousel/meta';

@Component({
  selector: 'ui-product-card-13',
  templateUrl: './product-card-13.component.html',
  styleUrls: ['./product-card-13.component.scss'],
})
export class ProductCard13Component {
  photos: KitPhotoCarouselPhoto[] = [
    {
      thumb: '/assets/snowboard .png',
      full: '/assets/snowboard .png',
      description: 'Snowboard',
    },
    {
      thumb: '/assets/snowboard 2.png',
      full: '/assets/snowboard 2.png',
      description: 'Snowboard',
    },
    {
      thumb: '/assets/snowboard .png',
      full: '/assets/snowboard .png',
      description: 'Snowboard',
    },
    {
      thumb: '/assets/snowboard 2.png',
      full: '/assets/snowboard 2.png',
      description: 'Snowboard',
    },
  ];
}
