import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartProductModalComponent } from './shoping-cart-product-modal.component';

describe('ShopingCartProductModalComponent', () => {
  let component: ShopingCartProductModalComponent;
  let fixture: ComponentFixture<ShopingCartProductModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartProductModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
