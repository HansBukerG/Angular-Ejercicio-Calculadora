import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Persona } from '../personas-lista/personas-lista.model';
import { PersonaServicio } from '../personas-lista/personas-lista.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personas-formulario',
  templateUrl: './personas-formulario.component.html',
  styleUrls: ['./personas-formulario.component.css']
})
export class PersonasFormularioComponent implements OnInit {
  formulario:FormGroup;
  index: number;


  constructor(
    private readonly constructorFormulario:FormBuilder,
    private servicioPersona:PersonaServicio,
    private router:Router,
    private route:ActivatedRoute
    ){
  }
  ngOnInit(): void {
    let personaModificar:Persona;
    this.formInit();
    this.index = this.route.snapshot.params['id'];
    if (this.index) {
      personaModificar = this.servicioPersona.encontrarPersona(this.index);
      this.formInitModificar(personaModificar);
    }
  }

  onSubmit(formulario:FormGroup){
    let persona!:Persona;
    if (formulario.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error formulario...',
        text: 'Debes completar los campos!',
      })

    } else {
      persona = new Persona(formulario.value.nombre,formulario.value.apellido);
      if (this.index) {
        //console.log('elemento para modificar detectado');
        this.servicioPersona.editarPersona(this.index,persona);
        Swal.fire('Modificado!', 'Elemento modificado exitosamente', 'success')
        this.router.navigate(['personas']);
      } else {
        this.servicioPersona.agregarPersona(persona);
        Swal.fire('Exito!', 'Elemento guardado correctamente', 'success')
        this.formInit();
      }
    }
  }

  formInit():void{
    this.formulario = this.constructorFormulario.group(
      {
        nombre: new FormControl('Sin Nombre',[Validators.required]),
        apellido: new FormControl('Sin Apellido',[Validators.required]),
      }
    )
  }
  formInitModificar(persona:Persona):void{
    this.formulario = this.constructorFormulario.group(
      {
        nombre: new FormControl(persona.nombre,[Validators.required]),
        apellido: new FormControl(persona.apellido,[Validators.required]),
      }
    )
  }
}
