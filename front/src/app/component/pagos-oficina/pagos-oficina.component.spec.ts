import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosOficinaComponent } from './pagos-oficina.component';

describe('PagosOficinaComponent', () => {
  let component: PagosOficinaComponent;
  let fixture: ComponentFixture<PagosOficinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosOficinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
