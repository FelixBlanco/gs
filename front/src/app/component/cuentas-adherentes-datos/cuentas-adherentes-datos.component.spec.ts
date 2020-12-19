import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasAdherentesDatosComponent } from './cuentas-adherentes-datos.component';

describe('CuentasAdherentesDatosComponent', () => {
  let component: CuentasAdherentesDatosComponent;
  let fixture: ComponentFixture<CuentasAdherentesDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasAdherentesDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasAdherentesDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
