import { TestBed } from '@angular/core/testing';

import { DeliveryPeopleService } from './delivery-people.service';

describe('DeliveryPeopleService', () => {
  let service: DeliveryPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
