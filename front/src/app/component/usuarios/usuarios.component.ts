import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavSuperiorComponent } from '../nav-superior/nav-superior.component';
import { ListaDatosService } from 'src/app/services/lista-datos.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  @ViewChild(NavSuperiorComponent) navSuperior : NavSuperiorComponent
  
  nuevos_datos : any = []

  lista_cuentas : any = [
    { 'user' : 'usuario 1', type : 'usuarios', active : true, url : '/usuarios',  'codigo' : 'u123' },
    { 'user' : 'usuario 2', type : 'usuarios', active : true, url : '/usuarios',  'codigo' : 'u456' },
    { 'user' : 'usuario 3', type : 'usuarios', active : true, url : '/usuarios',  'codigo' : 'u789' }
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
