import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGoodsReceiptComponent } from './create-goods-receipt.component';

describe('CreateGoodsReceiptComponent', () => {
  let component: CreateGoodsReceiptComponent;
  let fixture: ComponentFixture<CreateGoodsReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGoodsReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGoodsReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
