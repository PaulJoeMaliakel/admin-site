import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  item;
  wallet;
  createWallet = false;
  amount = 0;
  extra: number = 0;
  orders;
  constructor(
    private walletService: WalletService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,

    private OrdersService: OrdersService
  ) {}

  ngOnInit(): void {
    this.getUserData(this.route.snapshot.paramMap.get('id'));
    this.getWallet(this.route.snapshot.paramMap.get('id'));
    this.getUserOrders(this.route.snapshot.paramMap.get('id'));
  }
  getWallet(id) {
    this.walletService.get(id).subscribe(
      (data) => {
        if (data == '') {
          this.createWallet = true;

          this.addWallet();
        }
        this.wallet = data[0];
        console.log(data);
        console.log(this.wallet.amount);

        this.amount = parseFloat(this.wallet.amount);
        // if(!data.amount){
        // }
      },
      (error) => {
        console.log(error);
        this.createWallet = true;
      }
    );
  }
  addWallet() {
    this.amount += this.extra;
    console.log(this.extra);

    let wallet = {
      user_id: this.route.snapshot.paramMap.get('id'),
      amount: this.amount,
    };
    console.log(wallet);
    if (this.createWallet) {
      this.walletService.create(wallet).subscribe(
        (data) => {
          this.item = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.walletService.update(wallet.user_id, wallet).subscribe(
        (data) => {
          this.item = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  getUserData(id) {
    this.userService.get(id).subscribe(
      (data) => {
        this.item = data[0];
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUserOrders(id) {
    this.OrdersService.getOrdersByUserId(id).subscribe(
      (data) => {
        this.orders = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
