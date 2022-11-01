import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardComponent } from './cards-container/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsContainerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
