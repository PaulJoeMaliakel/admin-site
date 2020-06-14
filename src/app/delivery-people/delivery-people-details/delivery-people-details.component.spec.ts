import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPeopleDetailsComponent } from './delivery-people-details.component';

describe('DeliveryPeopleDetailsComponent', () => {
  let component: DeliveryPeopleDetailsComponent;
  let fixture: ComponentFixture<DeliveryPeopleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPeopleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPeopleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
