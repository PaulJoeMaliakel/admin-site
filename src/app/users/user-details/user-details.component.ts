import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  item;
  wallet;
  createWallet = false;
  amount=0;
  extra:number=0;


  constructor(private walletService: WalletService,private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getUserData(this.route.snapshot.paramMap.get('id'));
    this.getWallet(this.route.snapshot.paramMap.get('id'));
  }
  getWallet(id){
    this.walletService.get(id)
      .subscribe(
        data => {
          this.wallet =   data;
          console.log(data);
          console.log(this.wallet.amount);

          this.amount = this.wallet.amount;
          // if(!data.amount){
          // }
        },
        error => {
          console.log(error);
          this.createWallet = true;

        });
  }
   addWallet( ){
    this.amount += this.extra;
    console.log(this.extra)

    let wallet= {
      userId: localStorage.getItem("UserId"),
      amount: this.amount
    };
    console.log(wallet)
    if(this.createWallet){

      this.walletService.create(wallet)
      .subscribe(
        data => {
          this.item = data;
          console.log(data);
          
        },
        error => {
          console.log(error);
        });
    } else {
      this.walletService.update(wallet.userId, wallet)
      .subscribe(
        data => {
          this.item = data;
          console.log(data);
          
        },
        error => {
          console.log(error);
        });
    }
    

  }

  getUserData(id) {
    this.userService.get(id)
      .subscribe(
        data => {
          this.item = data;
          console.log(data);
           


        },
        error => {
          console.log(error);
        });
  }

}
