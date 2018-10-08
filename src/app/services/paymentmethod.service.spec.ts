import { TestBed, inject } from '@angular/core/testing';

import { PaymentmethodService } from './paymentmethod.service';

describe('PaymentmethodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentmethodService]
    });
  });

  it('should be created', inject([PaymentmethodService], (service: PaymentmethodService) => {
    expect(service).toBeTruthy();
  }));
});
