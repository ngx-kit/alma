import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [
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
  ],
})
export class MainMenuComponent implements OnInit {
  @HostBinding('@fade') fadeTrigger;

  constructor() {
  }

  ngOnInit() {
  }
}
