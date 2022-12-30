import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from './personas-lista.model';
import { PersonaServicio } from './personas-lista.service';

@Component({
  selector: 'app-personas-lista',
  templateUrl: './personas-lista.component.html',
  styleUrls: ['./personas-lista.component.css']
})
export class PersonasListaComponent implements OnInit {
  personas:Array<Persona>;

  constructor(
    private personaServicio:PersonaServicio,
    private router:Router
  ){

  }

  ngOnInit(): void {
    //this.personas = this.personaServicio.lista_personas;

    this.personaServicio.obtenerPersonas()
    .subscribe({
      next: response =>{
        this.personas = response as Array<Persona>;
        this.personaServicio.setPersonas(this.personas);
      }
      }
    );
  }
;

  eliminarPersona(persona:Persona){
    this.personaServicio.eliminarPersona(persona);

    Swal.fire('Exito!', 'Elemento eliminado correctamente', 'success')
  }

  editarPersona(persona:Persona){
    let vinculo:string = `personas/formulario/${this.personaServicio.lista_personas.indexOf(persona)}`;
    this.router.navigate([vinculo]);
    console.log(vinculo);
  }
}
