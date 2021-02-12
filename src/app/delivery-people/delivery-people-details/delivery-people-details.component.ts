import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryPeopleService } from 'src/app/services/delivery-people.service';

@Component({
  selector: 'app-delivery-people-details',
  templateUrl: './delivery-people-details.component.html',
  styleUrls: ['./delivery-people-details.component.css'],
})
export class DeliveryPeopleDetailsComponent implements OnInit {
  deliveryPeople;
  message;

  constructor(
    private DeliveryPeopleService: DeliveryPeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }
  getTutorial(id) {
    this.DeliveryPeopleService.get(id).subscribe(
      (data) => {
        this.deliveryPeople = data;
        console.log(this.deliveryPeople);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateData() {
    this.DeliveryPeopleService.update(
      this.deliveryPeople.id,
      this.deliveryPeople
    ).subscribe(
      (response) => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
        this.router.navigate(['/delivery-people']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
