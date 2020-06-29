import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  private subscription: Subscription = new Subscription()

  cartItem ;
  @Input() items: any;
  constructor( private msg: MessengerService, private cartService: CartService) { }

  ngOnInit(): void {

  }
  handleAddToCart(){
    this.cartItem={
      productId: this.items.id,
      productName: this.items.itemName,
      count: 1,
      price: this.items.cost,
      shopId: this.items.restaurantId
    }
    // this.cartService.create(this.cartItem).subscribe(()=> {
      this.msg.sendMsg(this.cartItem)
    // })
  }
  ngOnDestroy() {
    // Emit something to stop all Observables
    this.subscription.unsubscribe();
    this.unsubscribe.next();
    // Complete the notifying Observable to remove it
    this.unsubscribe.complete();
  }

}
