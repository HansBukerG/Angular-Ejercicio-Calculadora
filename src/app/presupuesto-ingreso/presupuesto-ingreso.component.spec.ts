import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoIngresoComponent } from './presupuesto-ingreso.component';

describe('PresupuestoIngresoComponent', () => {
  let component: PresupuestoIngresoComponent;
  let fixture: ComponentFixture<PresupuestoIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoIngresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
