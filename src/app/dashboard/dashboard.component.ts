import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { DeliveryPeopleService } from 'src/app/services/delivery-people.service';
import { UserService } from 'src/app/services/user.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  restaurants;
  deliveryPeople;
  reslen = 0;
  dellen = 0;
  users;
  userlen = 0;
  orders;
  orderlen = 0;
  pro = 0;
  pend = 0;
  comp = 0;
  can = 0;
  item: string;
  constructor(
    private RestaurantsService: RestaurantsService,
    private UserService: UserService,
    private OrdersService: OrdersService,

    private DeliveryPeopleService: DeliveryPeopleService
  ) {}

  ngOnInit(): void {
    this.item = localStorage.getItem('ACCESS_TOKEN');
    console.log(this.item);
    this.RestaurantsService.getAll().subscribe(
      (data) => {
        this.restaurants = data;
        this.reslen = this.restaurants.length;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.DeliveryPeopleService.getAll().subscribe(
      (data) => {
        this.deliveryPeople = data;
        this.dellen = this.deliveryPeople.length;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.UserService.getAll().subscribe(
      (data) => {
        this.users = data;
        this.userlen = this.users.length;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

    this.OrdersService.getAll().subscribe(
      (data) => {
        this.orders = data;
        this.orderlen = this.orders.length;

        for (let i = 0; i < this.orders.length; i++) {
          if (this.orders[i].status == 'processing') {
            this.pro = this.pro + 1;
          } else if (this.orders[i].status == 'pending') {
            this.pend = this.pend + 1;
          } else if (this.orders[i].status == 'completed') {
            this.comp = this.comp + 1;
          } else if (this.orders[i].status == 'cancelled') {
            this.can = this.can + 1;
          }
        }
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
