import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
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
    KitFullForRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
