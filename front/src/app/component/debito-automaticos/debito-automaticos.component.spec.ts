import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitoAutomaticosComponent } from './debito-automaticos.component';

describe('DebitoAutomaticosComponent', () => {
  let component: DebitoAutomaticosComponent;
  let fixture: ComponentFixture<DebitoAutomaticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebitoAutomaticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitoAutomaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
