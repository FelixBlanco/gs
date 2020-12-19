import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CuentasComponent, DatosComponent, adherentesComponent } from './component/cuentas/cuentas.component';
import { AreaComponent } from './compnent/area/area.component';
import { CuentasNuevaComponent } from './component/cuentas-nueva/cuentas-nueva.component';
import { CuentasAdherentesDatosComponent } from './component/cuentas-adherentes-datos/cuentas-adherentes-datos.component';
import { CuentasAdherentesServiciosComponent } from './component/cuentas-adherentes-servicios/cuentas-adherentes-servicios.component';

// Adherentes
import { AdherentesComponent,AdherentesCuentasComponent, AdherentesDatosComponent } from './component/adherentes/adherentes.component'
import { ListaCuentasComponent } from './component/lista-cuentas/lista-cuentas.component';
import { NumeroDeCuentaComponent, NumeroDeCuentaInitComponent } from './component/numero-de-cuenta/numero-de-cuenta.component';
import { AdicionalesComponent } from './component/adicionales/adicionales.component';
import { PagosComponent } from './component/pagos/pagos.component';
import { HistorialComponent } from './component/historial/historial.component';
import { CobradoresDomicilioComponent } from './component/cobradores-domicilio/cobradores-domicilio.component';
import { DescuentosPlanillaComponent } from './component/descuentos-planilla/descuentos-planilla.component';
import { DebitoAutomaticosComponent } from './component/debito-automaticos/debito-automaticos.component';
import { PagosOficinaComponent } from './component/pagos-oficina/pagos-oficina.component';
import { PlanesComponent } from './component/planes/planes.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'buscar', component : ListaCuentasComponent },
  { path : 'cuentas', component : CuentasComponent, children : [ 
    { path : 'nuevo', component : CuentasComponent },      
    { path : 'numero-de-cuenta', component : NumeroDeCuentaInitComponent, children : [       
      { path : 'datos', component : NumeroDeCuentaComponent },
      { path : 'pagos', component : PagosComponent },
      { path : 'adicionales', component : AdicionalesComponent },
      { path : 'historial', component : HistorialComponent },           
      { path : 'adherentes', component : AdherentesComponent, children : [
        { path: 'ver', component : AdherentesCuentasComponent},                
        { path: 'servicios', component : CuentasAdherentesServiciosComponent},                
        { path: 'datos', component : CuentasAdherentesDatosComponent, children : [
          { path : 'edit', component : AdherentesDatosComponent }
        ]},          
      ]},       
    ]},        
  ]},
  { path : 'cuentas/nueva', component : CuentasNuevaComponent }, 

  // Cobranzas
  { path : 'cobradores-domicilio', component : CobradoresDomicilioComponent },
  { path : 'descuentos-planilla', component : DescuentosPlanillaComponent },
  { path : 'debitos-automaticos', component : DebitoAutomaticosComponent },
  { path : 'pagos-oficina', component : PagosOficinaComponent },

  { path : 'planes', component : PlanesComponent }, 
  { path : 'usuarios', component : UsuariosComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
