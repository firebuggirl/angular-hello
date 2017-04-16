import { TestBed, inject } from '@angular/core/testing';

import { SaleDataService } from './sale-data.service';

describe('SaleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleDataService]
    });
  });

  it('should ...', inject([SaleDataService], (service: SaleDataService) => {
    expect(service).toBeTruthy();
  }));
});
