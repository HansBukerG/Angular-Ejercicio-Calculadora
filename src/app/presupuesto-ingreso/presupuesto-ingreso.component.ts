import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-presupuesto-ingreso',
  templateUrl: './presupuesto-ingreso.component.html',
  styleUrls: ['./presupuesto-ingreso.component.css']
})
export class PresupuestoIngresoComponent implements OnInit{
  listaIngresos:Array<Ingreso> = [];

  constructor(private ingresoServicio:IngresoServicio){
  }

  ngOnInit(): void {
    this.listaIngresos = this.ingresoServicio.ingresos;
  }

  eliminarIngreso(item:Ingreso){
    this.ingresoServicio.eliminarIngreso(item);
  }
}
