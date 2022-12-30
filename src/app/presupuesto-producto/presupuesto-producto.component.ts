import { Component, Input, OnInit } from '@angular/core';
import { Item, ItemService } from '../presupuesto_service.service';

@Component({
  selector: 'app-presupuesto-producto',
  templateUrl: './presupuesto-producto.component.html',
  styleUrls: ['./presupuesto-producto.component.css']
})
export class PresupuestoProductoComponent implements OnInit{
  @Input() listaElementos:Item;
  itemid:number;
  itemTipo:string;
  itemDescripcion:string
  itemValor:number;
  constructor(private itemService:ItemService){
  }

  ngOnInit(): void {
    this.initPage();
  }

  eliminarItem(itemId:number):void{
    this.itemService.removerItem(itemId);
  }

  initPage():void{
    this.itemid = this.listaElementos.itemId;
    this.itemTipo = this.listaElementos.itemTipo;
    this.itemDescripcion = this.listaElementos.itemDescripcion;
    this.itemValor = this.listaElementos.itemValor;
  }
}
