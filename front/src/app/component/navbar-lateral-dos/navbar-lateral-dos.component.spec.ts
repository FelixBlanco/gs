import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLateralDosComponent } from './navbar-lateral-dos.component';

describe('NavbarLateralDosComponent', () => {
  let component: NavbarLateralDosComponent;
  let fixture: ComponentFixture<NavbarLateralDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLateralDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLateralDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
