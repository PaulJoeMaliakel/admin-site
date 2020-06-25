import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category;
  message;

  constructor(private CategoryService: CategoryService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }
  getTutorial(id) {
    this.CategoryService.get(id)
      .subscribe(
        data => {
          this.category = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateData() {
    this.category.subcategory=this.category.subcategory.split(',');
    this.CategoryService.update(this.category.id, this.category)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          this.router.navigate(['/categories']);
        },
        error => {
          console.log(error);
        });
  }


}
