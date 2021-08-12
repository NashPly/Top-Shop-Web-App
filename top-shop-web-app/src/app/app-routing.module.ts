import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementEntryComponent } from './measurement-entry/measurement-entry.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { StandardTopComponent } from './Top Components/standard-top/standard-top.component';

const routes: Routes = [
  { path: '', component: ShoppingCartComponent }, //Default
  {
    path: 'app-measurement-entry', component: MeasurementEntryComponent, children: [
      {path: "app-Standard-top", component: StandardTopComponent}
    ]},
  
    { path: "**", redirectTo : ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
