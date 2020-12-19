import { TestBed } from '@angular/core/testing';

import { ListaDatosService } from './lista-datos.service';

describe('ListaDatosService', () => {
  let service: ListaDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
