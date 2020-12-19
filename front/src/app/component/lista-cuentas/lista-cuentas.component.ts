import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ListaDatosService } from 'src/app/services/lista-datos.service';

@Component({
  selector: 'app-lista-cuentas',
  templateUrl: './lista-cuentas.component.html',
  styleUrls: ['./lista-cuentas.component.css']
})
export class ListaCuentasComponent implements OnInit {
  
  isOpenTabSuperior : boolean = false
    
  nuevos_datos : any = []

  lista_cuentas : any = [
    { 'user' : 'Perez',     type : 'cuentas', active : 'false', url : '/cuentas/numero-de-cuenta/adherentes', 'codigo' : 'cu123' },
    { 'user' : 'Rodriguez', type : 'cuentas', active : 'false', url : '/cuentas/numero-de-cuenta/adherentes', 'codigo' : 'cu456' },
    { 'user' : 'Opa',       type : 'cuentas', active : 'false', url : '/cuentas/numero-de-cuenta/adherentes', 'codigo' : 'cu789' }
  ]

  constructor(
    private route : Router,
    private _listaDatos : ListaDatosService
  ) { }

  ngOnInit(): void {    
    if(!localStorage.getItem('tabSuperior')){
      localStorage.setItem('tabSuperior', null)
    }      
  }
  
  verLista(datos){    
    this._listaDatos.listaDatos(datos, '/cuentas/numero-de-cuenta/adherentes')
  }
}
