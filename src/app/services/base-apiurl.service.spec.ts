import { TestBed } from '@angular/core/testing';

import { BaseAPIURLService } from './base-apiurl.service';

describe('BaseAPIURLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseAPIURLService = TestBed.get(BaseAPIURLService);
    expect(service).toBeTruthy();
  });
});
