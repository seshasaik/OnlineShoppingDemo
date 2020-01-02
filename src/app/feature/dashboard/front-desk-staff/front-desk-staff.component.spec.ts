import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskStaffComponent } from './front-desk-staff.component';

describe('FrontDeskStaffComponent', () => {
  let component: FrontDeskStaffComponent;
  let fixture: ComponentFixture<FrontDeskStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontDeskStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontDeskStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
