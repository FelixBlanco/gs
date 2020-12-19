import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavSuperiorComponent } from '../nav-superior/nav-superior.component';
import { ListaDatosService } from 'src/app/services/lista-datos.service';

@Component({
  selector: 'app-cobradores-domicilio',
  templateUrl: './cobradores-domicilio.component.html',
  styleUrls: ['./cobradores-domicilio.component.css']
})
export class CobradoresDomicilioComponent implements OnInit {

  @ViewChild(NavSuperiorComponent) navSuperior : NavSuperiorComponent

  openTabHorizontal: boolean = false
  
  nuevos_datos : any = []

  lista_cuentas : any = [
    { 'user' : 'Cobranza 1', type : 'cobranzas', active : true, url : '/cobradores-domicilio', 'codigo' : 'c123' },
    { 'user' : 'Cobranza 2', type : 'cobranzas', active : true, url : '/cobradores-domicilio', 'codigo' : 'c456' },
    { 'user' : 'Cobranza 3', type : 'cobranzas', active : true, url : '/cobradores-domicilio', 'codigo' : 'c789' }
  ]

  constructor(
    private route : Router,
    private _listaDatos : ListaDatosService
  ) { }

  ngOnInit(): void {
    localStorage.removeItem('user')
    const cobranza = localStorage.getItem('cobranza')
    if(cobranza){
      this.openTabHorizontal = true
    }
  }

  verCobrador(){
    this.openTabHorizontal = true
    localStorage.setItem('user','true')
    localStorage.removeItem('user')
  }

  verLista(datos){
    
    this._listaDatos.listaDatos(datos)  
    
    this.navSuperior.allTabs()
  }

}
