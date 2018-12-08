import { TestBed } from '@angular/core/testing';

import { DataWaktuService } from './data-waktu-service.service';

describe('DataWaktuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataWaktuService = TestBed.get(DataWaktuService);
    expect(service).toBeTruthy();
  });
});
