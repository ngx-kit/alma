import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { KitSlideDirection, KitSlideHostService } from '@ngx-kit/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [
    trigger('menuHost', [
      transition(':enter, :leave', [
        query('@*', animateChild(), {optional: true}),
      ]),
    ]),
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('150ms', style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('150ms', style({
          opacity: 0,
        })),
      ]),
    ]),
    trigger('slide', [
      // entering
      transition('void => next', [
        style({transform: 'translateX(100%)'}),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)'),
      ]),
      transition('void => prev', [
        style({transform: 'translateX(-100%)'}),
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
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(-100%)'})),
      ]),
      transition('prev => void', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
        }),
        animate('250ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({transform: 'translateX(100%)'})),
      ]),
    ]),
  ],
  providers: [
    KitSlideHostService,
  ],
})
export class MainMenuComponent implements OnInit {
  @HostBinding('@fade') fadeTrigger;

  displayMenu = false;

  slideDirection: Observable<KitSlideDirection>;

  constructor(
    private el: ElementRef,
    private slideHost: KitSlideHostService,
  ) {
    this.slideHost.activateFirst = false;
  }

  get menuAnchor() {
    return this.el.nativeElement;
  }

  ngOnInit() {
    this.slideDirection = this.slideHost.directionChanges;
  }

  activate(id: number) {
    if (this.displayMenu) {
      this.slideHost.active = id;
    } else {
      this.displayMenu = true;
      this.slideHost.activeInitial = id;
    }
  }
}
