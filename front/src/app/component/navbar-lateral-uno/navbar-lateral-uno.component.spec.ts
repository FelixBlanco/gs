import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLateralUnoComponent } from './navbar-lateral-uno.component';

describe('NavbarLateralUnoComponent', () => {
  let component: NavbarLateralUnoComponent;
  let fixture: ComponentFixture<NavbarLateralUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLateralUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLateralUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
