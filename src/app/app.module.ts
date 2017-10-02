import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { uiComponents } from './ui/ui';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    ...uiComponents,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
