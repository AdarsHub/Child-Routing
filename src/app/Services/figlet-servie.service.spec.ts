import { TestBed } from '@angular/core/testing';

import { FigletServieService } from './figlet-servie.service';

describe('FigletServieService', () => {
  let service: FigletServieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FigletServieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
