import { TestBed } from '@angular/core/testing';

import { FehService } from './feh.service';

describe('FehService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FehService = TestBed.get(FehService);
    expect(service).toBeTruthy();
  });
});
