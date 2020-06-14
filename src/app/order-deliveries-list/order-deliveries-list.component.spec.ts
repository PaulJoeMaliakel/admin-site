import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeliveriesListComponent } from './order-deliveries-list.component';

describe('OrderDeliveriesListComponent', () => {
  let component: OrderDeliveriesListComponent;
  let fixture: ComponentFixture<OrderDeliveriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDeliveriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeliveriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
