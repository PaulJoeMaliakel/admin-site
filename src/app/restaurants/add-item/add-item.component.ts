import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service';
import { SubcategoryService } from 'src/app/services/Subcategory.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
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
    this.id = this.route.snapshot.paramMap.get('id');
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

  saveData() {
    const data = {
      title: this.item.itemName,
      desc: this.item.desc,
      shopId: this.id,
      Subcategory: this.item.subcategory[0],
      image: this.imagePath + this.imagePath.name,
      items: this.orderitems,
    };

    const formData = new FormData();
    formData.append('title', this.item.itemName);
    formData.append('desc', this.item.desc);
    formData.append('shopId', this.id);
    formData.append('Subcategory', this.item.subcategory[0]);
    formData.append('image', this.imagePath, this.imagePath.name);
    formData.append('items', JSON.stringify(this.orderitems));

    this.ItemService.create(formData).subscribe(
      (response) => {
        console.log(response);
        // this.submitted = true;
        // this.router.navigate(['/delivery-people']);
        this.router.navigate(['/menu/' + this.id]);
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
