import { TestBed, inject } from '@angular/core/testing';

import { RequesterTaskService } from './requester-task.service';

describe('RequesterTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequesterTaskService]
    });
  });

  it('should be created', inject([RequesterTaskService], (service: RequesterTaskService) => {
    expect(service).toBeTruthy();
  }));
});
