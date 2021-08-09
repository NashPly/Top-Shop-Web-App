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
import { MeasurementEntryComponent } from './measurement-entry/measurement-entry.component';
import { Routes, RouterModule } from '@angular/router';
import { BackButtonComponent } from './back-button/back-button.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'app-root', component: AppComponent},
  { path: 'app-measurement-entry', component: MeasurementEntryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    StandardTopComponent,
    TopInputComponent,
    ShoppingCartComponent,
    FooterComponent,
    MeasurementEntryComponent,
    BackButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
