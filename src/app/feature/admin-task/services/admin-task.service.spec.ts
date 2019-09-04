/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminTaskService } from './admin-task.service';

describe('Service: AdminTask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTaskService]
    });
  });

  it('should ...', inject([AdminTaskService], (service: AdminTaskService) => {
    expect(service).toBeTruthy();
  }));
});
