import { TestBed } from '@angular/core/testing';

import { LegislaturasService } from './legislaturas.service';

describe('LegislaturasService', () => {
  let service: LegislaturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegislaturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
