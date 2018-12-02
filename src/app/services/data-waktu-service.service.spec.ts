import { TestBed } from '@angular/core/testing';

import { DataWaktuServiceService } from './data-waktu-service.service';

describe('DataWaktuServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataWaktuServiceService = TestBed.get(DataWaktuServiceService);
    expect(service).toBeTruthy();
  });
});
