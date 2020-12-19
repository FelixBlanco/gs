import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasNuevaComponent } from './cuentas-nueva.component';

describe('CuentasNuevaComponent', () => {
  let component: CuentasNuevaComponent;
  let fixture: ComponentFixture<CuentasNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
