import { TestBed } from '@angular/core/testing';

import { DoacoesService } from './doacoes.service';

describe('DoacoesService', () => {
  let service: DoacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
