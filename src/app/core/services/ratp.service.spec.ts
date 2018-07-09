import { TestBed, inject } from '@angular/core/testing';

import { RatpService } from './ratp.service';

describe('RatpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatpService]
    });
  });

  it('should be created', inject([RatpService], (service: RatpService) => {
    expect(service).toBeTruthy();
  }));
});
