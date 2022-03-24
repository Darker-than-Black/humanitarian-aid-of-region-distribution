import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyDistributionComponent } from './supply-distribution.component';

describe('SupplyDistributionComponent', () => {
  let component: SupplyDistributionComponent;
  let fixture: ComponentFixture<SupplyDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
