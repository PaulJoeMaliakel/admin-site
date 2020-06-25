import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  subcategory;

  category = { 
    name: '',
    subcategory: '',
    
  }; 

  constructor(private CategoryService: CategoryService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveData() {
    this.subcategory=this.category.subcategory.split(',');
    const data = {
      name: this.category.name,
      subcategory: this.subcategory,
       
    };

    this.CategoryService.create(data)
      .subscribe(
        response => {
          console.log(response);
          // this.submitted = true;
        this.router.navigate(['/categories']);

        },
        error => {
          console.log(error);
        });
  }


}
