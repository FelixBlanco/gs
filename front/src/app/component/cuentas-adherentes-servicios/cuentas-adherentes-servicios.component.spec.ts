import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasAdherentesServiciosComponent } from './cuentas-adherentes-servicios.component';

describe('CuentasAdherentesServiciosComponent', () => {
  let component: CuentasAdherentesServiciosComponent;
  let fixture: ComponentFixture<CuentasAdherentesServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasAdherentesServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasAdherentesServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
