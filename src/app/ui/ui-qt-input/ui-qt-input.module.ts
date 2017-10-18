import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiQtInputComponent } from './ui-qt-input/ui-qt-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    UiQtInputComponent,
  ],
  declarations: [
    UiQtInputComponent,
  ],
})
export class UiQtInputModule {
}
