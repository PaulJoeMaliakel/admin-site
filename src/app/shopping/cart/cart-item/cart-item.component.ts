import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';



@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

 @Input() cItem: any;
  shopName;
  data;
  constructor(private restaurantsService: RestaurantsService, private cartService: CartService, private msg: MessengerService) { }

  ngOnInit(): void {
    console.log(this.cItem);

    this.restaurantsService.get(this.cItem.shopId).subscribe(item => {

      console.log(item);
      this.data=item;
      this.shopName = this.data.name;
  
    })
      

  }
  itemRemove(id){

    // this.cartService.update(id).subscribe(()=> {
      this.msg.sendId(id)
    // })

  }

}
