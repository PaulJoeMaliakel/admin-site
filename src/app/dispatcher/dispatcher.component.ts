import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { DeliveryPeopleService } from 'src/app/services/delivery-people.service';

@Component({
  selector: 'app-dispatcher',
  templateUrl: './dispatcher.component.html',
  styleUrls: ['./dispatcher.component.css'],
})
export class DispatcherComponent implements OnInit {
  orders;
  boys;
  message: string;
  constructor(
    private OrdersService: OrdersService,
    private DeliveryPeopleService: DeliveryPeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOrder();
    this.getBoys();
  }
  getOrder() {
    this.OrdersService.getorders().subscribe(
      (data) => {
        this.orders = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getBoys() {
    this.DeliveryPeopleService.getAll().subscribe(
      (data) => {
        this.boys = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  orderupdate(id, data, status) {
    data.status = status;
    console.log(data.deliveryBoy);
    this.OrdersService.updateorder(id, data).subscribe(
      (response) => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
