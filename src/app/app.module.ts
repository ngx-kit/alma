import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitFullForRootModule } from '@ngx-kit/ngx-kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { cards } from './products/cards/cards';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    KitFullForRootModule,
    CoreModule,
    AppRoutingModule,
    UiModule,
    HeaderModule,
    FooterModule,
  ],
  declarations: [
    AppComponent,
    ...cards,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
