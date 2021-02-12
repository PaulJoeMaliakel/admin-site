import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-deliveries-list',
  templateUrl: './order-deliveries-list.component.html',
  styleUrls: ['./order-deliveries-list.component.css'],
})
export class OrderDeliveriesListComponent implements OnInit {
  orders;

  constructor(
    private OrdersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.OrdersService.getAll().subscribe(
      (data) => {
        this.orders = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  orderDetails(id) {
    this.router.navigate(['/order-details/' + id]);
  }
}
