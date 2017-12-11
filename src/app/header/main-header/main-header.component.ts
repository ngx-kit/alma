import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  inputModel: any;

  displayMenu = false;

  menuAnchor: any;

  constructor(public el: ElementRef) {
  }

  ngOnInit() {
    this.menuAnchor = this.el.nativeElement;
  }
}
