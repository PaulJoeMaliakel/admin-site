import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPeopleComponent } from './delivery-people.component';

describe('DeliveryPeopleComponent', () => {
  let component: DeliveryPeopleComponent;
  let fixture: ComponentFixture<DeliveryPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
