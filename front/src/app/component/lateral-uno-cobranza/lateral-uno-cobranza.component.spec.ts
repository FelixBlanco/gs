import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralUnoCobranzaComponent } from './lateral-uno-cobranza.component';

describe('LateralUnoCobranzaComponent', () => {
  let component: LateralUnoCobranzaComponent;
  let fixture: ComponentFixture<LateralUnoCobranzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralUnoCobranzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralUnoCobranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
