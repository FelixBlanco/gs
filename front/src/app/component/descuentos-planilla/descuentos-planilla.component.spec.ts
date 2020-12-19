import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosPlanillaComponent } from './descuentos-planilla.component';

describe('DescuentosPlanillaComponent', () => {
  let component: DescuentosPlanillaComponent;
  let fixture: ComponentFixture<DescuentosPlanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentosPlanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosPlanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
