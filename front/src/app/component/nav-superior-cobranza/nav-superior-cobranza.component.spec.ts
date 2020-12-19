import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSuperiorCobranzaComponent } from './nav-superior-cobranza.component';

describe('NavSuperiorCobranzaComponent', () => {
  let component: NavSuperiorCobranzaComponent;
  let fixture: ComponentFixture<NavSuperiorCobranzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSuperiorCobranzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSuperiorCobranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
