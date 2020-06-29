import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'; 
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  user;
  filterData: any;
  data;

  constructor(private UserService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.UserService.getAll()
    .subscribe(
      data => {
        this.user = data;
        this.data= data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  deletedata(id,index) {
    this.UserService.delete(index)
      .subscribe(
        response => {
          console.log(response);
          // this.router.navigate(['/tutorials']);
          this.user.splice(id, 1);
          console.log(id);
  
        },
        error => {
          console.log(error);
        });
  }
  // editdata(id){
  //   this.router.navigate(['/edit-restaurant/'+ id]);
  
  // }
  details(id){
    this.router.navigate(['/user-details/'+ id]);
     localStorage.setItem("UserId", id);
  }
  search(term: string) {
    if(!term) {
      this.filterData = this.data;
    } else {
      this.filterData = this.data.filter(x =>  
        x.contact.trim().toLowerCase().includes(term.trim().toLowerCase())
        // x.email.trim().toLowerCase().includes(term.trim().toLowerCase())
       
        

      );
    }
    this.user=this.filterData;
  }

}
