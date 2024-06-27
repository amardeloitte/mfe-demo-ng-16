import { TestBed } from '@angular/core/testing';

import { DataMBusService } from './data-m-bus.service';

describe('DataMBusService', () => {
  let service: DataMBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
