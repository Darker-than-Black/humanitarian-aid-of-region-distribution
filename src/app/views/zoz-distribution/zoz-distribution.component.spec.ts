import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZozDistributionComponent } from './zoz-distribution.component';

describe('ZozDistributionComponent', () => {
  let component: ZozDistributionComponent;
  let fixture: ComponentFixture<ZozDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZozDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZozDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
