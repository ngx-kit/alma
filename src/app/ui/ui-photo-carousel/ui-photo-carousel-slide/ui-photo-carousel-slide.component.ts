import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnDestroy, } from '@angular/core';
import { KitSlideDirection, KitSlideHostService } from '@ngx-kit/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { UiPhotoCarouselPhoto } from '../meta';

/**
 * @apiOrder 2
 */
@Component({
  selector: 'ui-photo-carousel-slide',
  template: `<img [attr.src]="photo.full" [attr.alt]="photo.description">`,
  styleUrls: ['./ui-photo-carousel-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      // entering
      transition('void => prev', [
        style({transform: 'translateY(-100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      transition('void => next', [
        style({transform: 'translateY(100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      // leaving
      transition('prev => void', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateY(100%)'})),
      ]),
      transition('next => void', [
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
export class UiPhotoCarouselSlideComponent implements OnDestroy {
  @Input() photo: UiPhotoCarouselPhoto;

  @HostBinding('@slide') slideTrigger: KitSlideDirection;

  private destroy$ = new Subject<void>();

  constructor(private host: KitSlideHostService) {
    this.host.directionChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(d => {
          this.slideTrigger = d;
        });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
