import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoBalanceComponent } from './presupuesto-balance.component';

describe('PresupuestoBalanceComponent', () => {
  let component: PresupuestoBalanceComponent;
  let fixture: ComponentFixture<PresupuestoBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
