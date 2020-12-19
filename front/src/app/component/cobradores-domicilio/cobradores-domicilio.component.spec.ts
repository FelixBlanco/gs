import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobradoresDomicilioComponent } from './cobradores-domicilio.component';

describe('CobradoresDomicilioComponent', () => {
  let component: CobradoresDomicilioComponent;
  let fixture: ComponentFixture<CobradoresDomicilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobradoresDomicilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobradoresDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
