import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, CartItemComponent, CheckoutComponent],
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [CartComponent, CartItemComponent, CheckoutComponent],
})
export class SharedModule {}
