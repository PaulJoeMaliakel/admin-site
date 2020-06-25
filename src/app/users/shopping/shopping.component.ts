import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';  
import { CategoryService } from 'src/app/services/category.service';  
import { ItemService } from 'src/app/services/item.service';  



@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  restaurants;
  category;
  categoryList=[];
  public counter : number = 1; 
  items;
  constructor(private RestaurantsService: RestaurantsService, private CategoryService: CategoryService, private ItemService: ItemService) { }

  ngOnInit(): void {

    this.CategoryService.getAll()
    .subscribe(
      data => {
        this.category = data;
        console.log(data);

        for(let i=0; i<this.category.length;i++){
        this.categoryList.push(this.category[i].name);

        }
      console.log(this.categoryList);

      },
      error => {
        console.log(error);
      });
      console.log(this.categoryList);





    this.RestaurantsService.getAll()
    .subscribe(
      data => {
        this.restaurants = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });


      this.ItemService.getAllItem()
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });


  }
  deletedata(id,index) {
    this.RestaurantsService.delete(index)
      .subscribe(
        response => {
          console.log(response);
          // this.router.navigate(['/tutorials']);
          this.restaurants.splice(id, 1);
          console.log(id);
  
        },
        error => {
          console.log(error);
        });
  }
  // editdata(id){
  //   this.router.navigate(['/edit-restaurant/'+ id]);
  
  // }
  increment() { 
    this.counter += 1;
}

decrement() {
    if(this.counter >1){
        this.counter -= 1;
    }
}

}
