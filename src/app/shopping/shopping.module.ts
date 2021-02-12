import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
// import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingComponent } from './shopping.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopDetailComponent } from './shop-list/shop-detail/shop-detail.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [   ShoppingComponent,   ProductListComponent,   ProductItemComponent,  ShopListComponent, ShopDetailComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    SharedModule
   ],
  
})
export class ShoppingModule { }
