import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardComponent } from './cards-container/card/card.component';
import { PagesBtnContainerComponent } from './pages-btn-container/pages-btn-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsContainerComponent,
    CardComponent,
    PagesBtnContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
