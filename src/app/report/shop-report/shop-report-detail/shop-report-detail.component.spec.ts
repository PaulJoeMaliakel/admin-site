import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopReportDetailComponent } from './shop-report-detail.component';

describe('ShopReportDetailComponent', () => {
  let component: ShopReportDetailComponent;
  let fixture: ComponentFixture<ShopReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
