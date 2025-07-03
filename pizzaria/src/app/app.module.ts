import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzariaComponent } from './components/pizzaria/pizzaria.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CardPizzaComponent } from './components/card-pizza/card-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzariaComponent,
    ProdutosComponent,
    CardPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
