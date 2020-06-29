import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
