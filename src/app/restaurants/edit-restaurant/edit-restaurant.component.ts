import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css'],
})
export class EditRestaurantComponent implements OnInit {
  formattedAddress = '';
  restaurant;
  message;
  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  options = {
    types: [],
    componentRestrictions: { country: 'UA' },
  };
  imagePath: any;
  url;
  public handleAddressChange(address: any) {
    this.formattedAddress = address.formatted_address;
  }
  constructor(
    private RestaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id) {
    this.RestaurantsService.get(id).subscribe(
      (data) => {
        this.restaurant = data[0];
        this.url = this.restaurant.image;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateData() {
    const uploadData = new FormData();
    uploadData.append('unique_id', this.restaurant.unique_id);
    uploadData.append('title', this.restaurant.title);
    uploadData.append('email', this.restaurant.email);
    uploadData.append('contact', this.restaurant.contact);
    uploadData.append('category', this.restaurant.category);
    uploadData.append('status', this.restaurant.status);

    uploadData.append('image', this.imagePath, this.imagePath.name);
    this.RestaurantsService.update(
      this.restaurant.unique_id,
      uploadData
    ).subscribe(
      (response) => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
        this.router.navigate(['/restaurants']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onFileChanged(event) {
    const files = event.target.files;
    if (files.length === 0) return;

    const mimeType = files[0].type;
    console.log(files[0]);
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }
}
