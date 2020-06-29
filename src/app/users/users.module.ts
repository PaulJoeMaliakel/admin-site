import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ShoppingComponent } from '../shopping/shopping.component';
import { CartComponent } from '../shopping/cart/cart.component';
import { ProductListComponent } from '../shopping/product-list/product-list.component';
import { CartItemComponent } from '../shopping/cart/cart-item/cart-item.component';
import { ProductItemComponent } from '../shopping/product-list/product-item/product-item.component';
 import { ShopListComponent } from '../shopping/shop-list/shop-list.component';
import { ShopDetailComponent } from '../shopping/shop-list/shop-detail/shop-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersListComponent, EditUserComponent, UserDetailsComponent, ShoppingComponent, CartComponent, ProductListComponent, CartItemComponent, ProductItemComponent,  ShopListComponent, ShopDetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
  ]
})
export class UsersModule { }
