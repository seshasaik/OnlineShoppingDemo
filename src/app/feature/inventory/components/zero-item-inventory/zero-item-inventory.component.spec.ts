import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroItemInventoryComponent } from './zero-item-inventory.component';

describe('ZeroItemInventoryComponent', () => {
  let component: ZeroItemInventoryComponent;
  let fixture: ComponentFixture<ZeroItemInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroItemInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroItemInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
