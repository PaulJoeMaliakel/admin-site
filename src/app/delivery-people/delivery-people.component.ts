import { Component, OnInit } from '@angular/core';
import { DeliveryPeopleService } from 'src/app/services/delivery-people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delivery-people',
  templateUrl: './delivery-people.component.html',
  styleUrls: ['./delivery-people.component.css']
})
export class DeliveryPeopleComponent implements OnInit {

  constructor(private DeliveryPeopleService: DeliveryPeopleService, private route: ActivatedRoute,
    private router: Router) { }

  deliveryPeople;

  ngOnInit(): void {
    this.DeliveryPeopleService.getAll()
    .subscribe(
      data => {
        this.deliveryPeople = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
}

deletedata(id,index) {
  this.DeliveryPeopleService.delete(index)
    .subscribe(
      response => {
        console.log(response);
        // this.router.navigate(['/tutorials']);
        this.deliveryPeople.splice(id, 1);
        console.log(id);

      },
      error => {
        console.log(error);
      });
}

editdata(id){
  this.router.navigate(['/delivery-people-details/'+ id]);

}
  }

