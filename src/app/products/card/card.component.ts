import { Component, Input } from '@angular/core';
import { Product } from '../../data/meta';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() product: Product;
}
