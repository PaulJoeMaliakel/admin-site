import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service';
import * as uuid from 'uuid';
import { Subject, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription()

  cartTotal= 0;
  cartItem = [];
  cart;
  private unsubscribe = new Subject<void>();
   

  constructor(private msg: MessengerService, private cartService: CartService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.loadCartItem(localStorage.getItem("UserId"));
    // this.loadCartItem();
    // this.handleSubscription();
    this.subscription = this.msg.getMsg().subscribe((product)=> {
      console.log(product);
      
      this.addProductToCart(product);
    })
    this.msg.getId().subscribe((id)=> {
      console.log(id);
        this.removeitem(id);
    })

  }

  // handleSubscription(){
  
   
   


  
    
  // }
   ngOnDestroy() {
    this.subscription.unsubscribe()
    // Emit something to stop all Observables

    this.unsubscribe.next();
    // Complete the notifying Observable to remove it
    this.unsubscribe.complete();
  }
  removeitem(id){
     
     
    for(let i=0; i < this.cartItem.length; i++) {
      if(this.cartItem[i].id === id){
        console.log(this.cartItem[i]);
        if(this.cartItem[i].count>1){
        this.cartItem[i].count--;

          this.cartService.update(this.cartItem[i].id,this.cartItem[i]).subscribe(item=> {
            console.log(item);
          })
          
        } else {
          this.cartItem.splice( i, 1);
          this.cartService.delete(id).subscribe(item=> {
            console.log(item);
          })
        }
       
        break;
      }
    }
    this.cartTotal=0;
    this.cartItem.forEach((item) => {
      this.cartTotal += (item.count * item.price  )
    })
  }

 loadCartItem(id){
  this.cartService.getAll(id).subscribe(item => {
    console.log(item);
    this.cart = item;

    
    this.cart.forEach((item) => {
      this.cartItem.push(item);
    })
    // this.cartItem= this.cart;
    console.log(this.cartItem);
    this.cartTotal=0;
    this.cartItem.forEach((item) => {
      this.cartTotal += (item.count * item.price  )
    })
    //  this.handleSubscription();
  })
 }
  

  addProductToCart(product){

    console.log(product);

    let productExist = false;
     
    for(let i =0;i<this.cartItem.length;i++) {
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
        id:  uuid.v4(),
        productId: product.productId,
        productName: product.productName,
        count: 1,
        price: product.price,
        userId: localStorage.getItem("UserId"),
        shopId: product.shopId
      }
      this.cartItem.push(itemData)
      this.cartService.create(itemData).subscribe(item=> {
        console.log(item)
      
        console.log( this.cartItem);
      })
      
      
    }
    
    this.cartTotal=0;
    this.cartItem.forEach((item) => {
      this.cartTotal += (item.count * item.price  )
    })

    console.log(this.cartItem);

  }
 
}
