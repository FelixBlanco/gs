import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroDeCuentaComponent } from './numero-de-cuenta.component';

describe('NumeroDeCuentaComponent', () => {
  let component: NumeroDeCuentaComponent;
  let fixture: ComponentFixture<NumeroDeCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroDeCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroDeCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
