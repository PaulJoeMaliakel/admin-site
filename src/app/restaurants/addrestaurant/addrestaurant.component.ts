import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';


@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  latitude = 51.678418;
  longitude = 7.809007;

  restaurant = { 



    name: '',
    email: '',
    contact: '',
    contactName: '',
    openingTime: '',
    closingTime: '',
    orderMin: '',
    packagingCharge: '',
    offerminCharge: '',
    offerPercent: '',
    status: '',
    address: ''
   
  };
  constructor(private RestaurantsService: RestaurantsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  saveData() {
    const data = {
      name: this.restaurant.name,
      email: this.restaurant.email,
      contact: this.restaurant.contact,
      contactName: this.restaurant.contactName,
      openingTime: this.restaurant.openingTime,
      closingTime: this.restaurant.closingTime,
      orderMin: this.restaurant.orderMin,
      packagingCharge: this.restaurant.packagingCharge,
      offerminCharge: this.restaurant.offerminCharge,
      offerPercent: this.restaurant.offerPercent,
      status: this.restaurant.status,
      address: this.restaurant.address
    };

    this.RestaurantsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          // this.submitted = true;
        // this.router.navigate(['/delivery-people']);

        },
        error => {
          console.log(error);
        });
  }


}
