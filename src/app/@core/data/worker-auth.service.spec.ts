import { TestBed, inject } from '@angular/core/testing';

import { WorkerAuthService } from './worker-auth.service';

describe('WorkerAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerAuthService]
    });
  });

  it('should be created', inject([WorkerAuthService], (service: WorkerAuthService) => {
    expect(service).toBeTruthy();
  }));
});
