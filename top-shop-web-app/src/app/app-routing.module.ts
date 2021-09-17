import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementEntryComponent } from './measurement-entry/measurement-entry.component';
import { OrderInfoEntryComponent } from './order-info-entry/order-info-entry.component';
import { RedirectComponentComponent } from './redirect-component/redirect-component.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BarTopComponent } from './Top Components/bar-top/bar-top.component';
import { StandardTopComponent } from './Top Components/standard-top/standard-top.component';
import { VanityTopComponent } from './Top Components/vanity-top/vanity-top.component';

const routes: Routes = [
    {path: "", component: OrderInfoEntryComponent},
    {path: "shopping_list", component: ShoppingCartComponent},
    {path: "measurement_entry", component: MeasurementEntryComponent, children: [
      
      {path: "standard_top", component: StandardTopComponent},
      {path: "vanity_top", component: VanityTopComponent},
      {path: "bar_top", component: BarTopComponent}
    ]},
    {path: "redirect", component: RedirectComponentComponent}
    //,{ path: "**", redirectTo : ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
