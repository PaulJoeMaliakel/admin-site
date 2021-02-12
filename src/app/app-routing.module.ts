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
import { ShoppingModule } from './shopping/shopping.module';

import { AdminReportComponent } from './report/admin-report/admin-report.component';
import { ShopReportComponent } from './report/shop-report/shop-report.component';
import { ShopReportDetailComponent } from './report/shop-report/shop-report-detail/shop-report-detail.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'navigation',
    component: NavigationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'dispatcher',
    component: DispatcherComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-category/:id',
    component: EditCategoryComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'restaurants',
    component: RestaurantsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'menu/:id', component: MenuComponent, canActivate: [AuthGuard] },
  {
    path: 'add-item/:id',
    component: AddItemComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-item/:id',
    component: EditItemComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin-report',
    component: AdminReportComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'edit-restaurant/:id',
    component: EditRestaurantComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'addRestaurant',
    component: AddrestaurantComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shop-report',
    component: ShopReportComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'delivery-people',
    component: DeliveryPeopleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'delivery-people-details/:id',
    component: DeliveryPeopleDetailsComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'edit-delivery-people',
    component: EditDeliveryPeopleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'orders-deliveries-list',
    component: OrderDeliveriesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'order-details/:id',
    component: OrderDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shop-report-detail/:id/:fromDate/:toDate',
    component: ShopReportDetailComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'shopping',
    loadChildren: './shopping/shopping.module#ShoppingModule',
    canActivate: [AuthGuard],
  },

  // {path: 'menu', component: MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
