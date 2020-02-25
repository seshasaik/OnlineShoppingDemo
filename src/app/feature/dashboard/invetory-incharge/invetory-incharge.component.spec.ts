import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetoryInchargeComponent } from './invetory-incharge.component';

describe('InvetoryInchargeComponent', () => {
  let component: InvetoryInchargeComponent;
  let fixture: ComponentFixture<InvetoryInchargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvetoryInchargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetoryInchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
