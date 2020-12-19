import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { ListaDatosService } from 'src/app/services/lista-datos.service';

@Component({
  selector: 'app-navbar-lateral-dos',
  templateUrl: './navbar-lateral-dos.component.html',
  styleUrls: ['./navbar-lateral-dos.component.css']
})
export class NavbarLateralDosComponent implements OnInit {

  @Output() verEdita : any = new EventEmitter 

  
  constructor(
    private router : ActivatedRoute,
    private listaDatos : ListaDatosService
  ) { }

  ngOnInit(): void {    
  }

  EditarDatos(){    
    this.verEdita.emit({data : true })
  }
  
  /**
   * Cuando le demos aca tenemos que actualizar el localStorage
   */
  openNavTwo(){    
    this.listaDatos.navbarTwo()
  }

}
