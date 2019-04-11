import { TestBed, inject } from '@angular/core/testing';

import { WorkerTaskService } from './worker-task.service';

describe('WorkerTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkerTaskService]
    });
  });

  it('should be created', inject([WorkerTaskService], (service: WorkerTaskService) => {
    expect(service).toBeTruthy();
  }));
});
