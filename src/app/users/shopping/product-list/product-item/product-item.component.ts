import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

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
      price: this.items.cost
    }
    // this.cartService.create(this.cartItem).subscribe(()=> {
      this.msg.sendMsg(this.cartItem)
    // })
  }

}
