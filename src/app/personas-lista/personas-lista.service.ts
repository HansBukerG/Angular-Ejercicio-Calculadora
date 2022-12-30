import { Injectable } from "@angular/core";
import { DataService } from "../servicios/data.service";
import { Persona } from "./personas-lista.model";

@Injectable()
export class PersonaServicio{
    lista_personas:Array<Persona> = []

    constructor(
        private dataService:DataService
    ){

    }

    setPersonas(personas:Array<Persona>){
        this.lista_personas = personas;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    }

    agregarPersona(persona:Persona){
        this.lista_personas.push(persona);
        this.dataService.guardarPersonas(this.lista_personas);
    }

    eliminarPersona(persona:Persona){
        const indice:number = this.lista_personas.indexOf(persona);
        this.lista_personas.splice(indice,1);
        //this.dataService.eliminarPersona(indice);
        this.dataService.guardarPersonas(this.lista_personas);
    }

    encontrarPersona(index:number):Persona{
        let persona:Persona = this.lista_personas[index];
        return persona;
    }

    editarPersona(index:number,persona:Persona){
        this.lista_personas[index] = persona;
        this.dataService.modificarPersona(index,persona);
    }
}
