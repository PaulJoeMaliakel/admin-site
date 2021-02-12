import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { FormControl } from '@angular/forms';
import { RestaurantsService } from 'src/app/services/restaurants.service';

import { SubcategoryService } from 'src/app/services/Subcategory.service';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  category;
  subcategory;
  id;
  categories = new FormControl();
  categoryList: string[] = [];
  subcategories = new FormControl();
  subcategoryList = [];
  item = {
    itemName: '',
    cost: '',
    desc: '',
    category: '',
    subcategory: '',

    status: '',
    discount: '',
    restaurantId: '',
  };
  message: string;
  imagePath: any;
  url;
  tmpo;
  item2;
  count = 0;
  arrayOfObj = [];
  orderitems = [{}];
  constructor(
    private ItemService: ItemService,
    private SubcategoryService: SubcategoryService,
    private RestaurantsService: RestaurantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    this.SubcategoryService.getAll().subscribe(
      (data) => {
        this.category = data;
        console.log(data);
        for (let i = 0; i < this.category.length; i++) {
          this.subcategoryList.push(this.category[i]);
        }
        console.log(this.subcategoryList);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.categoryList);
  }
  onAddRow() {
    this.tmpo = 1;
    this.count++;
    this.arrayOfObj.push(this.count);
    this.orderitems.push({
      mrp: '',
      wprice: '',
      oprice: '',
      amount: '',
      status: '',
    });
  }

  getTutorial(id) {
    this.id = id;
    this.ItemService.get(id).subscribe(
      (data) => {
        this.item2 = data[0];
        this.orderitems = this.item2.items;
        this.url = this.item2.image;
        console.log(data);
        // this.categoryList = this.item.category;
        // this.subcategoryList = this.item.subcategory;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // updateData() {
  //   this.ItemService.update(this.item.id, this.item).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.message = 'The tutorial was updated successfully!';
  //       this.router.navigate(['/menu/' + this.item.restaurantId]);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

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

  saveData() {
    const data = {
      title: this.item.itemName,
      desc: this.item.desc,
      shopId: this.id,
      Subcategory: this.item.subcategory,
      image: this.imagePath + this.imagePath.name,
      items: this.orderitems,
    };

    const formData = new FormData();
    formData.append('title', this.item2.title);
    formData.append('desc', this.item2.desc);
    formData.append('shopId', this.item2.shopId);
    formData.append('Subcategory', this.item2.Subcategory);
    formData.append('image', this.imagePath, this.imagePath.name);
    formData.append('items', JSON.stringify(this.orderitems));

    this.ItemService.update(this.id, formData).subscribe(
      (response) => {
        console.log(response);
        // this.submitted = true;
        // this.router.navigate(['/delivery-people']);
        this.router.navigate(['/menu/' + this.item2.shopId]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
