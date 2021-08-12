import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MeasurementEntryComponent } from './measurement-entry/measurement-entry.component';
import { OrderInfoEntryComponent } from './order-info-entry/order-info-entry.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StandardTopComponent } from './Top Components/standard-top/standard-top.component';

const routes: Routes = [
    {path: "", component: OrderInfoEntryComponent},
    {path: "shopping_list", component: ShoppingCartComponent}
  , //Default
  {
    path: 'measurement_entry', component: MeasurementEntryComponent, children: [
      {path: "standard_top", component: StandardTopComponent}
    ]},
  
    { path: "**", redirectTo : ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
