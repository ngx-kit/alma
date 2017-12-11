import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { UiModule } from '../ui/ui.module';
import { FiltersComponent } from './filters/filters.component';
import { SortComponent } from './sort/sort.component';
import { CardComponent } from './card/card.component';
import { KitModule } from '@ngx-kit/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KitModule,
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
