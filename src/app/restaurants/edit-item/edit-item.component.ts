import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item;
  message;
  category;
  subcategory;
  id;
  categories = new FormControl();
  categoryList: string[]= [];
  subcategories = new FormControl();
  subcategoryList: string[]= [];
  constructor(private ItemService: ItemService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id) {
    this.ItemService.get(id)
      .subscribe(
        data => {
          this.item = data;
          console.log(data);
          this.categoryList= this.item.category;
          this.subcategoryList= this.item.subcategory;


        },
        error => {
          console.log(error);
        });
  }
  updateData() {
    this.ItemService.update(this.item.id, this.item)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          this.router.navigate(['/menu/'+this.item.restaurantId]);
        },
        error => {
          console.log(error);
        });
  }

}
