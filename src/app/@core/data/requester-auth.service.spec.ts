import { TestBed, inject } from '@angular/core/testing';

import { RequesterAuthService } from './requester-auth.service';

describe('RequesterAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequesterAuthService]
    });
  });

  it('should be created', inject([RequesterAuthService], (service: RequesterAuthService) => {
    expect(service).toBeTruthy();
  }));
});
