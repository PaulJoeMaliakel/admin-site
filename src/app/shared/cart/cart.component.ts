import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import * as uuid from 'uuid';
import { Subject, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  cartTotal = 0;
  cartItem = [];
  cart;
  checkout = false;
  private unsubscribe = new Subject<void>();

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('checkout') != '1') {
      this.checkout = true;
    }
    this.loadCartItem(localStorage.getItem('UserId'));
    // this.loadCartItem();
    // this.handleSubscription();
    this.subscription = this.msg.getMsg().subscribe((product) => {
      console.log(product);

      this.addProductToCart(product);
    });
    this.msg.getId().subscribe((id) => {
      console.log(id);
      this.removeitem(id);
    });
  }

  // handleSubscription(){

  // }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    // Emit something to stop all Observables

    this.unsubscribe.next();
    // Complete the notifying Observable to remove it
    this.unsubscribe.complete();
  }
  removeitem(id) {
    for (let i = 0; i < this.cartItem.length; i++) {
      if (this.cartItem[i].item_id === id) {
        console.log(this.cartItem[i]);
        if (this.cartItem[i].qty > 1) {
          this.cartItem[i].qty--;

          let data = {
            id: parseInt(localStorage.getItem('UserId')),
            pid: id,
          };
          this.cartService.remove(data).subscribe((item) => {
            console.log(item);
          });
        } else {
          this.cartItem.splice(i, 1);
          let data = {
            id: parseInt(localStorage.getItem('UserId')),
            pid: id,
          };
          this.cartService.remove(data).subscribe((item) => {
            console.log(item);
          });
        }

        break;
      }
    }
    this.cartTotal = 0;
    this.cartItem.forEach((item) => {
      this.cartTotal += parseFloat(item.oprice) * parseFloat(item.qty);
    });
    // if(this.cartTotal > 0) {

    // }
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
          oprice: parseFloat(item.productPrice),
          wprice: parseFloat(item.wprice),
        };

        this.cartItem.push(data);
      });
      // this.cartItem= this.cart;
      console.log(this.cartItem);
      this.cartTotal = 0;
      this.cartItem.forEach((item) => {
        this.cartTotal += item.qty * item.oprice;
      });
      //  this.handleSubscription();
    });
  }

  addProductToCart(product) {
    console.log(product);

    let productExist;

    for (let i = 0; i < this.cartItem.length; i++) {
      if (this.cartItem[i].item_id === product.item_id) {
        this.cartItem[i].qty = parseFloat(this.cartItem[i].qty) + 1;

        console.log(this.cartItem[i]);

        // this.cartService.update(this.cartItem[i].id,this.cartItem[i]).subscribe(item=> {
        //   console.log(item);
        // })
        productExist = true;
        break;
      }
    }
    if (!productExist) {
      let itemData = {
        // id:  uuid.v4(),
        item_id: product.item_id,
        productTitle: product.productTitle,
        qty: 1,
        shop_id: product.shop_id,
        oprice: parseFloat(product.oprice),
        wprice: parseFloat(product.wprice),
        // userId: localStorage.getItem("UserId"),
      };
      this.cartItem.push(itemData);
    }
    let data = {
      id: parseInt(localStorage.getItem('UserId')),
      pid: product.item_id,
    };
    this.cartService.create(data).subscribe((item) => {
      console.log(item);

      console.log(this.cartItem);
    });
    this.cartTotal = 0;
    this.cartItem.forEach((item) => {
      this.cartTotal += parseFloat(item.oprice) * parseFloat(item.qty);
    });

    console.log(this.cartItem);
  }

  toCheckout() {
    localStorage.setItem('checkout', '1');
  }
}
