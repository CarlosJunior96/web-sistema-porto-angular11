import { TestBed } from '@angular/core/testing';

import { AguaNavioService } from './agua-navio.service';

describe('AguaNavioService', () => {
  let service: AguaNavioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AguaNavioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
