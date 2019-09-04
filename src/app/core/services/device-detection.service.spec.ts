/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeviceDetectionService } from './device-detection.service';

describe('Service: DeviceDetection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceDetectionService]
    });
  });

  it('should ...', inject([DeviceDetectionService], (service: DeviceDetectionService) => {
    expect(service).toBeTruthy();
  }));
});
