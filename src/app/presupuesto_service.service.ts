import { Injectable } from "@angular/core";

export class Item{
  static id_autoIncrement = 1;

  private _itemId: number; // AutoIncrementado
  private _itemTipo: string; // Ingreso, Egreso
  private _itemDescripcion: string; // Descripción del item a ingresar
  private _itemValor: number; // Valor del item a ingresar

  constructor(tipo:string,descripcion:string,valor:number){
    this._itemId = Item.id_autoIncrement++;
    this._itemTipo = tipo;
    this._itemDescripcion = descripcion;
    this._itemValor = valor;
  }

  public get itemId(): number {
    return this._itemId;
  }
  public set itemId(value: number) {
    this._itemId = value;
  }
  public get itemTipo(): string {
    return this._itemTipo;
  }
  public set itemTipo(value: string) {
    this._itemTipo = value;
  }
  public get itemDescripcion(): string {
    return this._itemDescripcion;
  }
  public set itemDescripcion(value: string) {
    this._itemDescripcion = value;
  }
  public get itemValor(): number {
    return this._itemValor;
  }
  public set itemValor(value: number) {
    this._itemValor = value;
  }

}

@Injectable()
export class ItemService{
  //public listaItem:Array<Item>;
  public listaIngreso:Array<Item>;
  public listaEgreso:Array<Item>;
  private _ingresoAcumulado: number;

  private _egresoAcumulado: number;


  constructor(){
    this.listaIngreso = [];
    this.listaEgreso = [];
    this._ingresoAcumulado = 0;
    this._egresoAcumulado = 0;
  }

  public get ingresoAcumulado(): number {
    return this._ingresoAcumulado;
  }
  public set ingresoAcumulado(value: number) {
    this._ingresoAcumulado += value;
  }

  public get egresoAcumulado(): number {
    return this._egresoAcumulado;
  }
  public set egresoAcumulado(value: number) {
    this._egresoAcumulado += value;
  }

  agregarItem(producto:Item){

    if(producto.itemTipo === 'Ingreso'){
      this.listaIngreso.push(producto);
    }else{
      this.listaEgreso.push(producto);
    }
  }
  removerItem(idProducto:number){
    this.listaIngreso = this.listaIngreso.filter( (elemento) => {return elemento.itemId !== idProducto} )
    this.listaEgreso = this.listaEgreso.filter( (elemento) => {return elemento.itemId !== idProducto} )
  }

  obtenerMontoAcumulado():number{
    let salida:number = 0;
    this.listaIngreso.forEach(element => {
        if (element.itemTipo == 'Ingreso') {
          salida += element.itemValor;
        }
    });
    this.listaEgreso.forEach(element => {
        if (element.itemTipo == 'Egreso') {
          salida -= element.itemValor;
        }
    });
    return salida;
  }

  obtenerLista(listaItems:Array<Item>, itemTipo:string):Array<Item>{
    let listaSalida:Array<Item> = [];
    console.log('Recorriendo array');

    listaItems.forEach(element => {
      if(element.itemTipo == itemTipo){
        listaSalida.push(element);
      }
    });
    return listaSalida;
  }

}
