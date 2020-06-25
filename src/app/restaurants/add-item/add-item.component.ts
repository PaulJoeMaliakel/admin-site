import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';




@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  category;
  subcategory;
  id;
  categories = new FormControl();
  categoryList: string[]= [];
  subcategories = new FormControl();
  subcategoryList: string[]= [];
  item = { 

    itemName: '',
    cost: '',
    quantity: '',
     category: '',
    subcategory: '',

    status: '',
    discount: '',
    restaurantId: ''
   
  };
  
  constructor(private ItemService: ItemService, private CategoryService: CategoryService,private RestaurantsService: RestaurantsService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.CategoryService.getAll()
    .subscribe(
      data => {
        this.category = data;
        console.log(data);

        for(let i=0; i<this.category.length;i++){
          this.categoryList.push(this.category[i].name);
        
        for(let j=0; j<this.category[i].subcategory.length;j++){
          this.subcategoryList.push(this.category[i].subcategory[j]);
          
  
          
           }
        
        }
        

      console.log(this.categoryList);

      },
      error => {
        console.log(error);
      });
      console.log(this.categoryList);
  }

  saveData() {
    const data = {
      itemName: this.item.itemName,
      cost: this.item.cost,
      quantity: this.item.quantity,
       category: this.item.category,
      subcategory: this.item.subcategory,
  
      status: this.item.status,
      discount: this.item.discount,
      restaurantId: this.id
    };

    this.ItemService.create(data)
      .subscribe(
        response => {
          console.log(response);
          // this.submitted = true;
        // this.router.navigate(['/delivery-people']);
        this.router.navigate(['/menu/'+ this.id]);

        },
        error => {
          console.log(error);
        });
  }


}
