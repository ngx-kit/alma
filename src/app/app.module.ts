import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
import { AppComponent } from './app.component';
import { KitModule } from './kit/kit.module';
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
    FormsModule,
    KitFullForRootModule,
    KitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
