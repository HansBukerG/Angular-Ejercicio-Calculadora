import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoProductoComponent } from './presupuesto-producto.component';

describe('PresupuestoProductoComponent', () => {
  let component: PresupuestoProductoComponent;
  let fixture: ComponentFixture<PresupuestoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
