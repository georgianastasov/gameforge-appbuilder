import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HardwareComponentService } from './hardware-component.service';

describe('HardwareComponentService', () => {
  let service: HardwareComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(HardwareComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
