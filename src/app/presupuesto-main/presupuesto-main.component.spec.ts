import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoMainComponent } from './presupuesto-main.component';

describe('PresupuestoMainComponent', () => {
  let component: PresupuestoMainComponent;
  let fixture: ComponentFixture<PresupuestoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresupuestoMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
