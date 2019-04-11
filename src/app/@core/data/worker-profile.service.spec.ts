import { TestBed, inject } from '@angular/core/testing';

import { WorkerProfileService } from './worker-profile.service';

describe('WorkerProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerProfileService]
    });
  });

  it('should be created', inject([WorkerProfileService], (service: WorkerProfileService) => {
    expect(service).toBeTruthy();
  }));
});
