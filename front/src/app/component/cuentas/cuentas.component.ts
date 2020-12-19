import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Route, Router } from '@angular/router'

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {
  
  openLateralDos : boolean = false

  constructor() { }

  ngOnInit(): void {     
  }
  
  verLateralDos(){
    this.openLateralDos = true
  }   
}

@Component({
  selector: 'app-cuentas-datos',
  templateUrl: './cuentas-datos.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class DatosComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-cuentas-adherente',
  templateUrl: './cuentas-adherente.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class adherentesComponent implements OnInit {

  openLateralDos : boolean = false

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  verLateralDos(){
    this.router.navigate(['/cuentas/adherentes/datos'])
    this.openLateralDos = true
  }
}
