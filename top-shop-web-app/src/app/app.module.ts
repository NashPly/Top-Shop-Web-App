import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StandardTopComponent } from './Top Components/standard-top/standard-top.component';
import { FormsModule } from '@angular/forms';
import { TopInputComponent } from './top-input/top-input.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    StandardTopComponent,
    TopInputComponent,
    ShoppingCartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
