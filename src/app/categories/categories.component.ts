import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category;

  constructor(private CategoryService: CategoryService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.CategoryService.getAll()
    .subscribe(
      data => {
        this.category = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

deletedata(id,index) {
  this.CategoryService.delete(index)
    .subscribe(
      response => {
        console.log(response);
        // this.router.navigate(['/tutorials']);
        this.category.splice(id, 1);
        console.log(id);

      },
      error => {
        console.log(error);
      });
}

editdata(id){
  this.router.navigate(['/edit-category/'+ id]);

}

}
