import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { CardComponent } from './card/card.component';
import { FiltersComponent } from './filters/filters.component';
import { ListPageComponent } from './list-page/list-page.component';

import { ProductsRoutingModule } from './products-routing.module';
import { SortComponent } from './sort/sort.component';
import { ViewPageComponent } from './view-page/view-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    UiModule,
  ],
  declarations: [
    ListPageComponent,
    ViewPageComponent,
    FiltersComponent,
    SortComponent,
    CardComponent,
  ],
})
export class ProductsModule {
}
