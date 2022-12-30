import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presupuesto-balance',
  templateUrl: './presupuesto-balance.component.html',
  styleUrls: ['./presupuesto-balance.component.css']
})
export class PresupuestoBalanceComponent{
  @Input() presupuestoTotal:number;
  @Input() porcentajeTotal:number;
  @Input() ingresoTotal:number;
  @Input() egresoTotal:number;

  constructor(){}

}
