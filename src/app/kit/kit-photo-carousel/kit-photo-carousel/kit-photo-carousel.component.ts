import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { KitSlideHostService } from '@ngx-kit/ngx-kit';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import { KitPhotoCarouselPhoto } from '../meta';

/**
 * @apiOrder 1
 */
@Component({
  selector: 'kit-photo-carousel',
  templateUrl: './kit-photo-carousel.component.html',
  styleUrls: ['./kit-photo-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    KitSlideHostService,
  ],
})
export class KitPhotoCarouselComponent implements OnInit {
  active$: Observable<number>;

  /**
   * Slide auto-changing interval.
   */
  @Input() interval = 5000;

  @Input() photos: KitPhotoCarouselPhoto[] = [];

  constructor(private host: KitSlideHostService) {
  }

  ngOnInit() {
    this.active$ = this.host.active$;
  }

  activate(index: number) {
    this.host.active = index;
  }
}
