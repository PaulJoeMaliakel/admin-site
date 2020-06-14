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


const routes: Routes = [
  {path: 'dispatcher', component: DispatcherComponent},
  {path: 'restaurants', component: RestaurantsComponent},

  {path: 'restaurants/:restaurantId', component: RestaurantsComponent, children: [
    {path: 'menu', component: MenuComponent }]},

  
  {path: 'addRestaurant', component: AddrestaurantComponent},
  {path: 'delivery-people', component: DeliveryPeopleComponent},
  {path: 'delivery-people-details/:id', component: DeliveryPeopleDetailsComponent},

  {path: 'edit-delivery-people', component: EditDeliveryPeopleComponent},
  {path: 'orders-deliveries-list', component: OrderDeliveriesListComponent},
  {path: 'order-details', component: OrderDetailsComponent},




  // {path: 'menu', component: MenuComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
