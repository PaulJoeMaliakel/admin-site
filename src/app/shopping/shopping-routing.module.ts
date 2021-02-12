import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { CheckoutComponent } from '../shared/checkout/checkout.component';


const routes: Routes = [
  {path : '', component : ShoppingComponent},
  {path : 'checkout', component : CheckoutComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
