import { TestBed, inject } from '@angular/core/testing';

import { RequesterProfileService } from './requester-profile.service';

describe('RequesterProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequesterProfileService]
    });
  });

  it('should be created', inject([RequesterProfileService], (service: RequesterProfileService) => {
    expect(service).toBeTruthy();
  }));
});
