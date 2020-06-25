import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from 'src/app/services/restaurants.service'; 

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

   restaurants;

  constructor(private RestaurantsService: RestaurantsService, private route: ActivatedRoute,
    private router: Router) { }

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
  editdata(id){
    this.router.navigate(['/edit-restaurant/'+ id]);
  
  }
  addmenu(id){
    this.router.navigate(['/menu/'+ id]);
  
  }

}
