import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BagRoutingModule } from './bag-routing.module';
import { BagPageComponent } from './bag-page/bag-page.component';

@NgModule({
  imports: [
    CommonModule,
    BagRoutingModule
  ],
  declarations: [BagPageComponent]
})
export class BagModule { }
