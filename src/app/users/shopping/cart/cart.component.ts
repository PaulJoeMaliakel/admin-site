import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTotal= 0;
  cartItem = [];
  cart;
  constructor(private msg: MessengerService, private cartService: CartService,) { }

  ngOnInit(): void {
    this.loadCartItem();
    
     
   
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product)=> {
      console.log(product);
      this.addProductToCart(product);
    })
     
  }

 loadCartItem(){
  this.cartService.getAll().subscribe(item => {
    console.log(item);
    this.cart = item;

    
    // this.cart.forEach((item) => {
    //   this.addProductToCart(item)
    // })
    this.cartItem= this.cart;
    console.log(this.cartItem);
    this.handleSubscription();
  })
 }
  

  addProductToCart(product){

    console.log(product);

    let productExist = false;
     
    for(let i in this.cartItem) {
      if(this.cartItem[i].productId === product.productId){
        this.cartItem[i].count++;
        console.log(this.cartItem[i]);

        this.cartService.update(this.cartItem[i].id,this.cartItem[i]).subscribe(item=> {
          console.log(item);
        })
        productExist = true;
        break;
      }
    }
    if(!productExist){
      let itemData = {
        productId: product.productId,
        productName: product.productName,
        count: 1,
        price: product.price,
         
      }
      this.cartService.create(itemData).subscribe(item=> {
        console.log(item);
      })
      this.cartItem.push(itemData)
      
    }
    
    this.cartTotal=0;
    this.cartItem.forEach((item) => {
      this.cartTotal += (item.count * item.price  )
    })

    console.log(this.cartItem);

  }
}
