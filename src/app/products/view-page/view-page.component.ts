import { Component, OnInit } from '@angular/core';
import { UiPhotoCarouselPhoto } from '../../ui/ui-photo-carousel/meta';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {
  photos: UiPhotoCarouselPhoto[] = [
    {
      thumb: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      full: '/assets/0675_Sacha-Scarf_14-1200x1265.png',
      description: 'Snowboard',
    },
    {
      thumb: '/assets/barts-chani.jpg',
      full: '/assets/barts-chani.jpg',
      description: 'Snowboard',
    },
    {
      thumb: '/assets/barts-tiber.jpg',
      full: '/assets/barts-tiber.jpg',
      description: 'Snowboard',
    },
    {
      thumb: '/assets/arc-teryx-diplomat-scarf.jpg',
      full: '/assets/arc-teryx-diplomat-scarf.jpg',
      description: 'Snowboard',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
