import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KitSlideHostService, KitSlideId } from '@ngx-kit/core';
import { Observable } from 'rxjs/Observable';
import { UiPhotoCarouselPhoto } from '../meta';

/**
 * @apiOrder 1
 */
@Component({
  selector: 'ui-photo-carousel',
  templateUrl: './ui-photo-carousel.component.html',
  styleUrls: ['./ui-photo-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitSlideHostService,
  ],
})
export class UiPhotoCarouselComponent implements OnInit {
  activeChanges: Observable<KitSlideId>;

  /**
   * Slide auto-changing interval.
   */
  @Input() interval = 5000;

  @Input() photos: UiPhotoCarouselPhoto[] = [];

  constructor(private host: KitSlideHostService) {
  }

  ngOnInit() {
    this.activeChanges = this.host.activeChanges;
  }

  activate(index: number) {
    this.host.active = index;
  }

  prev() {
    this.host.prev(true);
  }

  next() {
    this.host.next(true);
  }
}
