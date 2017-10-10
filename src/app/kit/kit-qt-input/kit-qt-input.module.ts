import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitQtInputComponent } from './kit-qt-input/kit-qt-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    KitQtInputComponent,
  ],
  declarations: [
    KitQtInputComponent,
  ],
})
export class KitQtInputModule {
}
