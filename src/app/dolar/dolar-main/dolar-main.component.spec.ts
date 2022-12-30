import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarMainComponent } from './dolar-main.component';

describe('DolarMainComponent', () => {
  let component: DolarMainComponent;
  let fixture: ComponentFixture<DolarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolarMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
