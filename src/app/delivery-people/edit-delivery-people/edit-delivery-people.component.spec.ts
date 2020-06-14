import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryPeopleComponent } from './edit-delivery-people.component';

describe('EditDeliveryPeopleComponent', () => {
  let component: EditDeliveryPeopleComponent;
  let fixture: ComponentFixture<EditDeliveryPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeliveryPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeliveryPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
