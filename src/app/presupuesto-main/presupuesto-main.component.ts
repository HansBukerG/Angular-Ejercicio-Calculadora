import { Component, OnInit } from '@angular/core';
import { Egreso } from '../presupuesto-egreso/egreso.model';
import { EgresoServicio } from '../presupuesto-egreso/egreso.service';
import { Ingreso } from '../presupuesto-ingreso/ingreso.model';
import { IngresoServicio } from '../presupuesto-ingreso/ingreso.service';
import { Item, ItemService } from '../presupuesto_service.service';

@Component({
  selector: 'app-presupuesto-main',
  templateUrl: './presupuesto-main.component.html',
  styleUrls: ['./presupuesto-main.component.css'],
  providers: [ItemService]
})
export class PresupuestoMainComponent {


  listaIngreso:Array<Ingreso> = [];
  listaEgreso:Array<Egreso> =[];
  montoAcumulado:number = 0;
  constructor(
    private servicioIngreso:IngresoServicio,
    private servicioEgreso:EgresoServicio
    )
  {
      this.listaIngreso = servicioIngreso.ingresos;
      this.listaEgreso = servicioEgreso.egresos;
  }

  getIngresoTotal():number{
    let ingresoTotal:number = 0;

    this.listaIngreso.forEach((elemento) => {
      ingresoTotal += elemento.valor;
    });
    return ingresoTotal;

  }

  getEgresoTotal():number{
    let egresoTotal:number = 0;
    this.listaEgreso.forEach((elemento) => {
      egresoTotal += elemento.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal():number{
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal():number{
    return this.getIngresoTotal()-this.getEgresoTotal();
  }
}


