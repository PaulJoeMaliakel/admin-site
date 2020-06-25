import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/services/restaurants.service';  

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  restaurants;

  constructor(private RestaurantsService: RestaurantsService ) { }

  ngOnInit(): void {
    this.RestaurantsService.getAll()
    .subscribe(
      data => {
        this.restaurants = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
