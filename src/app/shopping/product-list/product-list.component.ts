import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  id;
  menu;
  constructor(private route: ActivatedRoute,
    private router: Router, private ItemService: ItemService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ItemService.getAll(this.id)
    .subscribe(
      data => {
        this.menu = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
