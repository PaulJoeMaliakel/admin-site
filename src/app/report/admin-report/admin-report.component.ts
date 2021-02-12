import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css'],
})
export class AdminReportComponent implements OnInit {
  fromDate;
  toDate;
  orders;
  shops;
  values;
  itemTotal = 0;
  wtotal = 0;
  ototal = 0;
  profit = 0;
  ftotal = 0;
  fwtotal = 0;
  fprofit = 0;
  public earnings: Array<Object> = [];
  constructor(
    private OrdersService: OrdersService,
    private RestaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.RestaurantsService.getAll().subscribe(
      (data) => {
        this.shops = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getReport() {
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
              this.wtotal += parseFloat(this.orders[i].orderitems[j].wpriceT);
              this.ototal += parseFloat(this.orders[i].orderitems[j].opriceT);
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
              dboy: this.orders[i].deliveryBoy,
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
