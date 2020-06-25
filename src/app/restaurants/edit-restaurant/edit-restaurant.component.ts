import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  formattedAddress='';
  restaurant;
  message;
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  options={
    types: [],
    componentRestrictions: { country: 'UA' }
    }
  public handleAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
}
  constructor(private RestaurantsService: RestaurantsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id) {
    this.RestaurantsService.get(id)
      .subscribe(
        data => {
          this.restaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateData() {
    this.RestaurantsService.update(this.restaurant.id, this.restaurant)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          this.router.navigate(['/delivery-people']);
        },
        error => {
          console.log(error);
        });
  }

}
