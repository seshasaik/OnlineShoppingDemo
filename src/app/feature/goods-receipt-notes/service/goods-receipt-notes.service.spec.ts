import { TestBed } from '@angular/core/testing';

import { GoodsReceiptNotesService } from './goods-receipt-notes.service';

describe('GoodsReceiptNotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodsReceiptNotesService = TestBed.get(GoodsReceiptNotesService);
    expect(service).toBeTruthy();
  });
});
