import { Component, OnInit, Output,EventEmitter, HostListener, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuLateralService } from 'src/app/services/menu-lateral.service';

@Component({
  selector: 'app-adherentes',
  templateUrl: './adherentes.component.html',
  styleUrls: ['./adherentes.component.css']
})
export class AdherentesComponent implements OnInit, DoCheck {

  openCuenta  : boolean = false
  openEdit    : boolean = false
  openInfo    : boolean = false  
  openGeneral : boolean = true
  verDatosOpen : boolean = false // solo para el caso de ver el lateral de menu

  constructor(
    private router : Router,   
    private acRoute : ActivatedRoute, 
    private _menu : MenuLateralService
  ) { }

  ngOnInit(): void {     
    this.verLocalAdherentes()
    this.openEdit = false   
  }

  ngDoCheck(){
    console.log('change')
    console.log(this.acRoute.snapshot.routeConfig)
  }

  verLocalAdherentes(){
    const local = localStorage.getItem('ver_adherente');
    if(local){
      this.openEdit = true
      this.openInfo = true  
      localStorage.removeItem('ver_adherente')
      this.router.navigate(['/cuentas/numero-de-cuenta/adherentes/datos'])
    }
  }

  /**
   * Cuando le damos click a el datos
   * abre el front de editar
   */
  openLateral(){    
    this.openEdit = true
    localStorage.setItem('ver_datos','true')        
  }

  VerCuentas(){    
    this.openEdit = false
    this.openInfo = true    
    localStorage.removeItem('ver_datos')
    this.router.navigate(['/cuentas/numero-de-cuenta/adherentes/datos'])
  }
}

@Component({
  selector: 'app-adherentes-cuentas',
  templateUrl: './adherentes-cuentas.component.html',
  styleUrls: ['./adherentes.component.css']
})
export class AdherentesCuentasComponent implements OnInit {
  
  constructor() {  
   }

  ngOnInit(): void { 
  }
}


@Component({
  selector: 'app-adherentes-datos',
  templateUrl: './adherentes-datos.component.html',
  styleUrls: ['./adherentes.component.css']
})
export class AdherentesDatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

