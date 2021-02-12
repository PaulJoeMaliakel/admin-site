import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-shop-report',
  templateUrl: './shop-report.component.html',
  styleUrls: ['./shop-report.component.css'],
})
export class ShopReportComponent implements OnInit {
  fromDate: Date;
  toDate: Date;
  orders;
  shops;
  values;
  itemTotal = 0;
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
          this.values = Object.values(
            this.orders[i].orderitems.reduce((a, b) => {
              if (!a[b.shop_id]) a[b.shop_id] = b;
              return a;
            }, {})
          );
        }
        console.log(this.values);

        for (let j = 0; j < this.values.length; j++) {
          this.itemTotal = 0;

          for (let i = 0; i < this.orders.length; i++) {
            if (this.orders[i].status == 'completed') {
              for (let k = 0; k < this.orders[i].orderitems.length; k++) {
                console.log(this.values);
                console.log(
                  this.values[j].shop_id + 'sdfsdfsdfsdfsfyerhyehqerhqwrhrew'
                );
                if (
                  this.orders[i].orderitems[k].shop_id ===
                  this.values[j].shop_id
                ) {
                  console.log(
                    this.orders[i].orderitems[k].wpriceT + 'sfsdfasdfasd'
                  );
                  this.itemTotal += parseFloat(
                    this.orders[i].orderitems[k].wpriceT
                  );
                }
              }
            }
          }
          // console.log(this.orders[i].orderitems[0].wpriceT + 'sfsdfasdfasd');
          this.earnings.push({
            shop_id: this.values[j].shop_id,
            itemTotal: this.itemTotal,
          });
        }

        console.log(this.earnings);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  orderDetails(id) {
    console.log(id);
    this.router.navigate([
      '/shop-report-detail/' + id + '/' + this.fromDate + '/' + this.toDate,
    ]);
  }
}
