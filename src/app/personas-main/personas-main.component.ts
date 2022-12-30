import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas-main',
  templateUrl: './personas-main.component.html',
  styleUrls: ['./personas-main.component.css']
})
export class PersonasMainComponent {

  constructor(private router:Router){

  }
  routeFormulario(){
    this.router.navigate(['personas/formulario']);
  }
}
