import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../personas-lista/personas-lista.model';
import { LoginService } from './login.service';

const g_url:string = 'https://listado-personas-78e61-default-rtdb.firebaseio.com/';
const g_DataPersonas:string = 'datos.json';


@Injectable()
export class DataService {

  constructor(
    private httpClient:HttpClient,
    private loginService:LoginService
  ) { }

  //post

  //Guardar Personas
  guardarPersonas(personas:Array<Persona>){
    //metoo post sirve para enviar la lista una y otra vez, se van generando listas cada vez mas largas en la bd, por loque hay que tener cuidado
    /*this.httpClient.post(`${g_url}datos.json`,personas).subscribe(
      (response) =>{ console.log(`Resultado guardar personas: ${response}`) },
      (error) => { console.log(`Se ha producido un error: ${error}`) }
    )*/
    //metodo put, sirve para sobreescribir una lista ya existente
    this.httpClient.put(`${g_url}${g_DataPersonas}`,personas).subscribe(
      (response) =>{ console.log(`Resultado guardar personas: ${response}`) },
      (error) => { console.log(`Se ha producido un error: ${error}`) }
    )
  }

  cargarPersonas(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get(`${g_url}${g_DataPersonas}?auth=`+token);
  }

  modificarPersona(index:number,persona:Persona){
    let url_salida = `${g_url}/datos/${index}.json`;
    this.httpClient.put(url_salida,persona)
    .subscribe(
      (response) => {
        console.log('Nuevo objeto Persona: ' + response);
      },
      (error) => {
        console.log('No se ha podido guardar el objeto')
      }
    );
  }

  eliminarPersona(index:number){
    let url_salida = `${g_url}/datos/${index}.json`;
    this.httpClient.delete(url_salida)
    .subscribe(
      (response) => {
        console.log('Elemento eliminado con exito!: ' + response);
      },
      (error) => {
        console.log('No se ha podido eliminar este objeto')
      }
    );
  }



}
