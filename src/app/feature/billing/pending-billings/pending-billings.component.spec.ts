import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingBillingsComponent } from './pending-billings.component';

describe('PendingBillingsComponent', () => {
  let component: PendingBillingsComponent;
  let fixture: ComponentFixture<PendingBillingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingBillingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingBillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
