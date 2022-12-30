import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoEgresoComponent } from './presupuesto-egreso.component';

describe('PresupuestoEgresoComponent', () => {
  let component: PresupuestoEgresoComponent;
  let fixture: ComponentFixture<PresupuestoEgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoEgresoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
