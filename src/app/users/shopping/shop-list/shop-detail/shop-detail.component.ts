import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  @Input() resDetail: any;
  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }

  toProductList(id){

    this.router.navigate(['/product-list/'+ id]);
  
  }
 

}
