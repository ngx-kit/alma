import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
import { UiModule } from '../../src/app/ui/ui.module';
import { cards } from './cards/cards';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ...cards,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    KitFullForRootModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
