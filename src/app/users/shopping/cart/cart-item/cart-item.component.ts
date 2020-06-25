import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

 @Input() cItem: any;

  constructor(private cartService: CartService, private msg: MessengerService) { }

  ngOnInit(): void {
    console.log(this.cItem);
  }
  itemRemove(id){

    this.cartService.delete(id).subscribe(()=> {
      this.msg.sendMsg(id)
    })

  }

}
