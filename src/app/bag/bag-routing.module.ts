import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagPageComponent } from './bag-page/bag-page.component';

const routes: Routes = [
  {
    path: '',
    component: BagPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagRoutingModule {
}
