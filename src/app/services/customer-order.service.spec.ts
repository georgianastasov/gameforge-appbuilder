import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CustomerOrderService } from './customer-order.service';

describe('CustomerOrderService', () => {
  let service: CustomerOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CustomerOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
