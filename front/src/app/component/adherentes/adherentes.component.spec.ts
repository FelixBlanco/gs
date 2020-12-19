import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentesComponent } from './adherentes.component';

describe('AdherentesComponent', () => {
  let component: AdherentesComponent;
  let fixture: ComponentFixture<AdherentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
