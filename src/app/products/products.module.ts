import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ProductCard1Component } from './cards/product-card-1/product-card-1.component';
import { ProductCard2Component } from './cards/product-card-2/product-card-2.component';
import { UiModule } from '../ui/ui.module';
import { FiltersComponent } from './filters/filters.component';
import { SortComponent } from './sort/sort.component';
import { CardComponent } from './card/card.component';
import { KitFullModule } from '@ngx-kit/ngx-kit';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitFullModule,
    ProductsRoutingModule,
    UiModule,
  ],
  declarations: [
    ListPageComponent,
    ViewPageComponent,
    ProductCard1Component,
    ProductCard2Component,
    FiltersComponent,
    SortComponent,
    CardComponent,
  ],
})
export class ProductsModule {
}
