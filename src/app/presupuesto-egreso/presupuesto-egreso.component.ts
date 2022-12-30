import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.service';

@Component({
  selector: 'app-presupuesto-egreso',
  templateUrl: './presupuesto-egreso.component.html',
  styleUrls: ['./presupuesto-egreso.component.css']
})
export class PresupuestoEgresoComponent implements OnInit {
  listaEgresos:Array<Egreso> = [];

  constructor(private egresoServicio:EgresoServicio){

  }
  ngOnInit(): void {
    this.listaEgresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(item:Egreso){
    this.egresoServicio.eliminarEgreso(item);
  }
}
