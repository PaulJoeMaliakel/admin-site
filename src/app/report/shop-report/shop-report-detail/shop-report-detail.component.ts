import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-shop-report-detail',
  templateUrl: './shop-report-detail.component.html',
  styleUrls: ['./shop-report-detail.component.css'],
})
export class ShopReportDetailComponent implements OnInit {
  fromDate: any;
  toDate: any;
  id: any;
  orders;
  profit: number = 0;
  ototal: number = 0;
  fwtotal: number = 0;
  wtotal: number = 0;
  public earnings: Array<Object> = [];
  fprofit: number = 0;
  ftotal: number = 0;

  constructor(
    private OrdersService: OrdersService,
    private RestaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fromDate = this.route.snapshot.paramMap.get('fromDate');
    this.toDate = this.route.snapshot.paramMap.get('toDate');
    this.id = this.route.snapshot.paramMap.get('id');
    this.earnings = [];
    console.log(this.fromDate, this.toDate);
    this.OrdersService.getReport(this.fromDate, this.toDate).subscribe(
      (data) => {
        this.orders = data;
        console.log(data);
        for (let i = 0; i < this.orders.length; i++) {
          this.profit = 0;
          this.ototal = 0;
          this.wtotal = 0;
          if (this.orders[i].status == 'completed') {
            for (let j = 0; j < this.orders[i].orderitems.length; j++) {
              if (this.orders[i].orderitems[j].shop_id == this.id) {
                this.wtotal += parseFloat(this.orders[i].orderitems[j].wpriceT);
                this.ototal += parseFloat(this.orders[i].orderitems[j].opriceT);
              }
            }

            this.profit = this.ototal - this.wtotal;
            this.fprofit += this.profit;
            this.fwtotal += this.wtotal;
            this.ftotal += parseFloat(this.orders[i].total);
            this.earnings.push({
              orderId: this.orders[i].id,
              created: this.orders[i].created,
              total: this.orders[i].total,
              wtotal: this.wtotal,
              profit: this.profit,
              status: this.orders[i].status,
            });
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
