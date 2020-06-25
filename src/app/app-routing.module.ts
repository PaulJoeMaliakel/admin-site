import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispatcherComponent } from './dispatcher/dispatcher.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddrestaurantComponent } from './restaurants/addrestaurant/addrestaurant.component';
import { MenuComponent } from './restaurants/menu/menu.component';
import { DeliveryPeopleComponent } from './delivery-people/delivery-people.component';
import { EditDeliveryPeopleComponent } from './delivery-people/edit-delivery-people/edit-delivery-people.component';
import { OrderDeliveriesListComponent } from './order-deliveries-list/order-deliveries-list.component';
import { OrderDetailsComponent } from './order-deliveries-list/order-details/order-details.component';
import { DeliveryPeopleDetailsComponent } from './delivery-people/delivery-people-details/delivery-people-details.component';
import { EditRestaurantComponent } from './restaurants/edit-restaurant/edit-restaurant.component';
import { AddItemComponent } from './restaurants/add-item/add-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { EditItemComponent } from './restaurants/edit-item/edit-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersModule } from './users/users.module';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},

  {path: 'dispatcher', component: DispatcherComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},



  {path: 'restaurants', component: RestaurantsComponent}, 
  {path: 'menu/:id', component: MenuComponent},
  {path: 'add-item/:id', component: AddItemComponent},
  {path: 'edit-item/:id', component: EditItemComponent},



  {path: 'edit-restaurant/:id', component: EditRestaurantComponent},

  
  {path: 'addRestaurant', component: AddrestaurantComponent},

  {path: 'delivery-people', component: DeliveryPeopleComponent},
  {path: 'delivery-people-details/:id', component: DeliveryPeopleDetailsComponent},

  {path: 'edit-delivery-people', component: EditDeliveryPeopleComponent},
  {path: 'orders-deliveries-list', component: OrderDeliveriesListComponent},
  {path: 'order-details', component: OrderDetailsComponent},
  {path : 'users', loadChildren : './users/users.module#UsersModule'},



  // {path: 'menu', component: MenuComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
