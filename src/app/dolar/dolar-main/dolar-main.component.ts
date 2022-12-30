import { Component, OnInit } from '@angular/core';
import { DolarService } from 'src/app/servicios/dolar.service';

@Component({
  selector: 'app-dolar-main',
  templateUrl: './dolar-main.component.html',
  styleUrls: ['./dolar-main.component.css']
})
export class DolarMainComponent implements OnInit {
  precio_dolar:any;


  constructor(
    private dolarService:DolarService
  ){}

  ngOnInit(): void {

    this.precio_dolar = this.obtenerPrecioDolar();
  }

  obtenerPrecioDolar():number{
    let respuesta:any;
    respuesta = this.dolarService.formatoDolar;
    this.dolarService.getApi().subscribe(
      {
        next: response => {
          respuesta = response;
        },
        error(err) {
          console.log('Ha ocurrido un error con la conexion al proveedor'+err);
        },
      }
    )
    return respuesta.dolar.valor;
  };

}
