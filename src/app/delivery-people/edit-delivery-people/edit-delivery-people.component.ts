import { Component, OnInit } from '@angular/core';
import { DeliveryPeopleService } from 'src/app/services/delivery-people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-delivery-people',
  templateUrl: './edit-delivery-people.component.html',
  styleUrls: ['./edit-delivery-people.component.css'],
})
export class EditDeliveryPeopleComponent implements OnInit {
  delivery_man = {
    name: '',
    contact: '',
    status: '',

    published: false,
  };
  constructor(
    private DeliveryPeopleService: DeliveryPeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveData() {
    const data = {
      name: this.delivery_man.name,
      contact: this.delivery_man.contact,
      status: this.delivery_man.status,
    };

    this.DeliveryPeopleService.create(data).subscribe(
      (response) => {
        console.log(response);
        // this.submitted = true;
        this.router.navigate(['/delivery-people']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
