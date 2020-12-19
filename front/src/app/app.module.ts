import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CuentasComponent,DatosComponent, adherentesComponent } from './component/cuentas/cuentas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { NavbarLateralComponent } from './component/navbar-lateral/navbar-lateral.component';
import { NavbarLateralUnoComponent } from './component/navbar-lateral-uno/navbar-lateral-uno.component';
import { NavbarLateralDosComponent } from './component/navbar-lateral-dos/navbar-lateral-dos.component';
import { ReportesComponent } from './component/reportes/reportes.component';
import { AreaComponent } from './compnent/area/area.component';
import { CuentasNuevaComponent } from './component/cuentas-nueva/cuentas-nueva.component';
import { CuentasAdherentesDatosComponent } from './component/cuentas-adherentes-datos/cuentas-adherentes-datos.component';
import { CuentasAdherentesServiciosComponent } from './component/cuentas-adherentes-servicios/cuentas-adherentes-servicios.component';
import { AdherentesComponent,AdherentesCuentasComponent,AdherentesDatosComponent } from './component/adherentes/adherentes.component';
import { ListaCuentasComponent } from './component/lista-cuentas/lista-cuentas.component';
import { NumeroDeCuentaComponent,NumeroDeCuentaInitComponent } from './component/numero-de-cuenta/numero-de-cuenta.component';
import { NavSuperiorComponent } from './component/nav-superior/nav-superior.component';
import { AdicionalesComponent } from './component/adicionales/adicionales.component';
import { PagosComponent } from './component/pagos/pagos.component';
import { HistorialComponent } from './component/historial/historial.component';
import { CobradoresDomicilioComponent } from './component/cobradores-domicilio/cobradores-domicilio.component';
import { DescuentosPlanillaComponent } from './component/descuentos-planilla/descuentos-planilla.component';
import { DebitoAutomaticosComponent } from './component/debito-automaticos/debito-automaticos.component';
import { PagosOficinaComponent } from './component/pagos-oficina/pagos-oficina.component';
import { CobranzaComponent } from './component/cobranza/cobranza.component';
import { LateralUnoCobranzaComponent } from './component/lateral-uno-cobranza/lateral-uno-cobranza.component';
import { NavSuperiorCobranzaComponent } from './component/nav-superior-cobranza/nav-superior-cobranza.component';
import { PlanesComponent } from './component/planes/planes.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuentasComponent, DatosComponent, adherentesComponent,
    NavbarLateralComponent,
    NavbarLateralUnoComponent,
    NavbarLateralDosComponent,
    ReportesComponent,
    AreaComponent,
    CuentasNuevaComponent,
    CuentasAdherentesDatosComponent,
    CuentasAdherentesServiciosComponent,
    AdherentesComponent,AdherentesCuentasComponent,AdherentesDatosComponent, ListaCuentasComponent, NumeroDeCuentaComponent,NumeroDeCuentaInitComponent, NavSuperiorComponent, AdicionalesComponent, PagosComponent, HistorialComponent, CobradoresDomicilioComponent, DescuentosPlanillaComponent, DebitoAutomaticosComponent, PagosOficinaComponent, CobranzaComponent, LateralUnoCobranzaComponent, NavSuperiorCobranzaComponent, PlanesComponent, UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
