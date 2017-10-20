import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { ViewPageComponent } from './view-page/view-page.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ListPageComponent, ViewPageComponent]
})
export class ProductsModule { }
