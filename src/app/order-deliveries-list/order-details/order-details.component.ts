import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  order;
  shop;
  orderitems;
  totalPay = 0;
  deliveryCharge = 30;
  itemTotal: number = 0;
  fromDate;
  toDate;
  constructor(
    private OrdersService: OrdersService,
    private RestaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fromDate = this.route.snapshot.paramMap.get('fromDate');

    this.getOrder(this.route.snapshot.paramMap.get('id'));

    this.RestaurantsService.getAll().subscribe(
      (data) => {
        this.shop = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOrder(id) {
    this.OrdersService.get(id).subscribe(
      (data) => {
        this.order = data[0];
        this.orderitems = this.order.orderitems;
        for (let i = 0; i < this.orderitems.length; i++) {
          this.itemTotal += parseFloat(this.orderitems[i].opriceT);
        }
        console.log(this.itemTotal);
        this.totalPay = this.itemTotal + this.deliveryCharge;
        console.log(this.orderitems);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
