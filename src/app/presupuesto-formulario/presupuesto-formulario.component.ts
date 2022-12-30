import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Egreso } from '../presupuesto-egreso/egreso.model';
import { EgresoServicio } from '../presupuesto-egreso/egreso.service';
import { Ingreso } from '../presupuesto-ingreso/ingreso.model';
import { IngresoServicio } from '../presupuesto-ingreso/ingreso.service';
import { Item, ItemService } from '../presupuesto_service.service';

@Component({
  selector: 'app-presupuesto-formulario',
  templateUrl: './presupuesto-formulario.component.html',
  styleUrls: ['./presupuesto-formulario.component.css']
})
export class PresupuestoFormularioComponent implements OnInit{
  public formularioIngreso: FormGroup;
  ingreso:Ingreso;
  egreso:Egreso;

  constructor(private readonly constructorFormulario: FormBuilder
    , private servicioIngreso:IngresoServicio
    , private servicioEgreso:EgresoServicio
    ){
  }
  
  ngOnInit(): void {
    this.formularioIngreso = this.formInit();
  }

  formInit():FormGroup{
    return this.constructorFormulario.group(
      {
        tipo : new FormControl('',[Validators.required]),
        descripcion: new FormControl('',Validators.required),
        valor: new FormControl(0,[Validators.required,Validators.min(0)])
      }
    )
  }

  onSubmit(formulario:FormGroup){
    if(formulario.invalid){
      console.log('Faltan campos por completar');
    }
    else{
      if (formulario.value.tipo === 'Ingreso') {
        this.ingreso =  new Ingreso(
          formulario.value.descripcion,
          formulario.value.valor
          )

          this.servicioIngreso.ingresos.push(this.ingreso);
        } else {
          this.egreso =  new Egreso(
            formulario.value.descripcion,
            formulario.value.valor
            )

          this.servicioEgreso.egresos.push(this.egreso);
      }
    }
  }

}

