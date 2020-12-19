import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavSuperiorComponent } from '../nav-superior/nav-superior.component';
import { ListaDatosService } from 'src/app/services/lista-datos.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  @ViewChild(NavSuperiorComponent) navSuperior : NavSuperiorComponent

  nuevos_datos : any = []

  lista_cuentas : any = [
    { 'user' : 'planes 1', active : true, type : 'planes',  url : '/planes',  'codigo' : 'p123' },
    { 'user' : 'planes 2', active : true, type : 'planes',  url : '/planes',  'codigo' : 'p456' },
    { 'user' : 'planes 3', active : true, type : 'planes',  url : '/planes',  'codigo' : 'p789' }
  ]

  constructor(
    private route : Router,
    private _listaDatos : ListaDatosService

  ) { }

  ngOnInit(): void {
  }

  verLista(datos){
    
    this._listaDatos.listaDatos(datos)
    
    this.navSuperior.allTabs()
    
  }

}