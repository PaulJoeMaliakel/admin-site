import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  wallet;
  amount = 0;
  item;
  info = [];
  address;
  cartitem = [];
  cartTotal = 0;
  cartItem = [];
  cart;
  shop = [];
  private subscription: Subscription = new Subscription();
  constructor(
    private msg: MessengerService,

    private walletService: WalletService,
    private OrdersService: OrdersService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getWallet(localStorage.getItem('UserId'));

    console.log(this.cartitem);
    this.getUserData(localStorage.getItem('UserId'));
    this.loadCartItem(localStorage.getItem('UserId'));
  }

  loadCartItem(id) {
    this.cartService.getAll(id).subscribe((item) => {
      console.log(item);
      this.cart = item;

      this.cart.data.data.forEach((item) => {
        let data = {
          item_id: item.pid,
          productTitle: item.productTitle,
          qty: item.qty,
          shop_id: item.shopId,
          opriceT: parseFloat(item.productPrice) * item.qty,
          wpriceT: parseFloat(item.wprice) * item.qty,
        };
        this.shop.push(item.shopId);
        this.cartItem.push(data);
      });
      // this.cartItem= this.cart;
      console.log(this.cartItem);
      this.cartTotal = 0;
      this.cartItem.forEach((item) => {
        this.cartTotal += item.opriceT;
      });
      //  this.handleSubscription();
    });
  }
  placeorder() {
    let dat = {
      del_address: this.address.del_address,
      phone: this.address.phone,
      user_id: parseInt(localStorage.getItem('UserId')),
      total: this.cartTotal,
      lng: this.address.lng,
      lat: this.address.lat,
      status: 'pending',
      flat: this.address.flat,
      reach: this.address.reach,
      shopIds: this.shop,
      orderitems: this.cartItem,
    };
    console.log(dat);
    this.OrdersService.create(dat).subscribe((item) => {
      console.log(item);
      alert('order Placed');
    });
  }

  addressSelect(i) {
    this.address = i;
    console.log(this.address);
  }
  mySelectHandler(d) {
    console.log(this.address);
  }
  getUserData(id) {
    this.OrdersService.getOrdersByUserId(id).subscribe(
      (data) => {
        this.item = data;

        this.item.forEach((item) => {
          let data = {
            address: item.del_address,
            flat: item.flat,
            lat: item.lat,
            lng: item.lng,
            phone: item.phone,
            reach: item.reach,
          };

          this.info.push(data);
        });

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // getWallet(id) {
  //   this.walletService.get(id).subscribe(
  //     (data) => {
  //       this.wallet = data;
  //       console.log(data);
  //       console.log(this.wallet.amount);

  //       this.amount = this.wallet.amount;
  //       // if(!data.amount){
  //       // }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  ngOnDestroy() {
    localStorage.setItem('checkout', '0');
  }
}
