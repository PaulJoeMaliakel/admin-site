import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DispatcherComponent } from './dispatcher/dispatcher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { AddrestaurantComponent } from './restaurants/addrestaurant/addrestaurant.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AgmCoreModule } from '@agm/core';
import { MenuComponent } from './restaurants/menu/menu.component';
import { DeliveryPeopleComponent } from './delivery-people/delivery-people.component';
import { EditDeliveryPeopleComponent } from './delivery-people/edit-delivery-people/edit-delivery-people.component';
import { UsersComponent } from './users/users.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { OrderDeliveriesListComponent } from './order-deliveries-list/order-deliveries-list.component';
import { OrderDetailsComponent } from './order-deliveries-list/order-details/order-details.component';
import { DeliveryPeopleDetailsComponent } from './delivery-people/delivery-people-details/delivery-people-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditRestaurantComponent } from './restaurants/edit-restaurant/edit-restaurant.component';
import { AddItemComponent } from './restaurants/add-item/add-item.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { EditItemComponent } from './restaurants/edit-item/edit-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersModule } from './users/users.module';
import { AdminReportComponent } from './report/admin-report/admin-report.component';
import { ShopReportComponent } from './report/shop-report/shop-report.component';
import { ShopReportDetailComponent } from './report/shop-report/shop-report-detail/shop-report-detail.component';
import { ShoppingModule } from './shopping/shopping.module';
import { LoginComponent } from './login/login.component';
// import { CartComponent } from './shared/cart/cart.component';
// import { CartItemComponent } from './shared/cart/cart-item/cart-item.component';

// import { GooglePlaceModule } from "ngx-google-places-autocomplete";
// import { MarkerManager } from '@agm/core';
// import {GoogleMapsAPIWrapper} from '@agm/core';
// import {DatepickerModule} from 'ngx-date-picker';
// import { NgxDaterangepickerMd } from 'ngx-datepicker-material';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DispatcherComponent,
    RestaurantsComponent,
    AddrestaurantComponent,
    MenuComponent,
    DeliveryPeopleComponent,
    EditDeliveryPeopleComponent,

    AddUsersComponent,
    OrderDeliveriesListComponent,
    OrderDetailsComponent,
    DeliveryPeopleDetailsComponent,
    EditRestaurantComponent,
    AddItemComponent,
    CategoriesComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    EditItemComponent,
    DashboardComponent,
    AdminReportComponent,
    ShopReportComponent,
    ShopReportDetailComponent,
    LoginComponent,
    // CartComponent,
    // CartItemComponent,
  ],
  imports: [
    // MatInputModule,
    // MatFormFieldModule,
    // MatNativeDateModule,
    // MatRippleModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    UsersModule,
    ShoppingModule,

    // MatDatepickerModule,
    //  NgxDaterangepickerMd,

    // DatepickerModule,
    // GooglePlaceModule,
    // MarkerManager,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places'],
    }),
  ],
  // exports: [CartComponent,CartItemComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
