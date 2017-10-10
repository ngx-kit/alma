import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, } from '@angular/core';
import { KitSlideDirection, KitSlideHostService } from '@ngx-kit/ngx-kit';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { KitPhotoCarouselPhoto } from '../meta';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'kit-photo-carousel-slide',
  template: `<img [attr.src]="photo.full" [attr.alt]="photo.description">`,
  styleUrls: ['./kit-photo-carousel-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      // entering
      transition('void => next', [
        style({transform: 'translateY(-100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      transition('void => prev', [
        style({transform: 'translateY(100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      // leaving
      transition('next => void', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateY(100%)'})),
      ]),
      transition('prev => void', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateY(-100%)'})),
      ]),
    ]),
  ],
})
export class KitPhotoCarouselSlideComponent implements OnDestroy {
  @Input() photo: KitPhotoCarouselPhoto;

  @HostBinding('@slide') slideTrigger: KitSlideDirection;

  private destroy$ = new Subject<void>();

  constructor(private host: KitSlideHostService) {
    this.host.direction$
        .takeUntil(this.destroy$)
        .subscribe(d => {
          this.slideTrigger = d;
        });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
