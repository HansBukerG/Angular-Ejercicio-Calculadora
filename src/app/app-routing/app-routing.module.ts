import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DolarMainComponent } from '../dolar/dolar-main/dolar-main.component';
import { ErrorComponent } from '../paginas/error/error.component';
import { LoginMainComponent } from '../paginas/login-main/login-main.component';
import { PersonasFormularioComponent } from '../personas-formulario/personas-formulario.component';
import { PersonasMainComponent } from '../personas-main/personas-main.component';
import { PresupuestoFormularioComponent } from '../presupuesto-formulario/presupuesto-formulario.component';
import { PresupuestoMainComponent } from '../presupuesto-main/presupuesto-main.component';

export const rutas: Routes = [
  {
    path:'login',
    component: LoginMainComponent
  },
  {
    path:'presupuesto',
    component: PresupuestoMainComponent
  },
  {
    path:'personas',
    component: PersonasMainComponent
  },
  {
    path:'personas/formulario/',
    component: PersonasFormularioComponent
  },
  {
    path:'personas/formulario/:id',
    component: PersonasFormularioComponent
  },
  {
    path:'dolar',
    component: DolarMainComponent
  },
  {
    path:'**',
    component: ErrorComponent
  },

]

@NgModule({
  imports: [
    RouterModule.forRoot(
      rutas
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
