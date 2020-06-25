import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  id;
  menu;

  constructor(private route: ActivatedRoute,
    private router: Router, private ItemService: ItemService ) { }

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
  additem(){
    this.router.navigate(['/add-item/'+ this.id]);
  }

  deletedata(id,index) {
    this.ItemService.delete(index)
      .subscribe(
        response => {
          console.log(response);
          // this.router.navigate(['/tutorials']);
          this.menu.splice(id, 1);
          console.log(id);
  
        },
        error => {
          console.log(error);
        });
  }
  editdata(id){
    this.router.navigate(['/edit-item/'+ id]);
  
  }

}
