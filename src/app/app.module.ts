import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PresupuestoMainComponent } from './presupuesto-main/presupuesto-main.component';
import { PresupuestoFormularioComponent } from './presupuesto-formulario/presupuesto-formulario.component';
import { PresupuestoProductoComponent } from './presupuesto-producto/presupuesto-producto.component';
import { PresupuestoBalanceComponent } from './presupuesto-balance/presupuesto-balance.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PresupuestoIngresoComponent } from './presupuesto-ingreso/presupuesto-ingreso.component';
import { PresupuestoEgresoComponent } from './presupuesto-egreso/presupuesto-egreso.component';
import { IngresoServicio } from './presupuesto-ingreso/ingreso.service';
import { EgresoServicio } from './presupuesto-egreso/egreso.service';
import { PersonasMainComponent } from './personas-main/personas-main.component';
import { PersonasFormularioComponent } from './personas-formulario/personas-formulario.component';
import { PersonasListaComponent } from './personas-lista/personas-lista.component';
import { PersonaServicio } from './personas-lista/personas-lista.service';
import { ErrorComponent } from './paginas/error/error.component';
import { DataService } from './servicios/data.service';
import { HttpClientModule } from '@angular/common/http';
import { DolarService } from './servicios/dolar.service';
import { DolarMainComponent } from './dolar/dolar-main/dolar-main.component';
import { LoginMainComponent } from './paginas/login-main/login-main.component';
import { LoginService } from './servicios/login.service';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestoMainComponent,
    PresupuestoFormularioComponent,
    PresupuestoProductoComponent,
    PresupuestoBalanceComponent,
    PresupuestoIngresoComponent,
    PresupuestoEgresoComponent,
    PersonasMainComponent,
    PersonasFormularioComponent,
    PersonasListaComponent,
    ErrorComponent,
    DolarMainComponent,
    LoginMainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    IngresoServicio,
    EgresoServicio,
    PersonaServicio,
    DataService,
    DolarService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
