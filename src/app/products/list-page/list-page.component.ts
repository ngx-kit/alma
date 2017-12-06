import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data/data.service';
import { Product } from '../../data/meta';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  products: Product[];

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.products = this.data.products;
  }
}
