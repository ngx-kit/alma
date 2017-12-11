import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data/data.service';
import { Product } from '../../data/meta';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss'],
})
export class ViewPageComponent implements OnInit {
  color: any;

  size: any;

  product: Product;

  recent: Product[];

  constructor(private data: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.data.products.find(p => p.id === parseInt(params.id, 10));
      this.recent = this.data.products.slice(0, 4);
    });
  }
}
