import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/core';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
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
  active$: Observable<number>;

  /**
   * Slide auto-changing interval.
   */
  @Input() interval = 5000;

  @Input() photos: UiPhotoCarouselPhoto[] = [];

  constructor(private host: KitSlideHostService) {
  }

  ngOnInit() {
    this.active$ = this.host.active$;
  }

  activate(index: number) {
    this.host.active = index;
  }
}
