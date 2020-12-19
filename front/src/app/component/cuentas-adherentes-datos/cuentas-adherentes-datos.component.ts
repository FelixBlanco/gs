import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cuentas-adherentes-datos',
  templateUrl: './cuentas-adherentes-datos.component.html',
  styleUrls: ['./cuentas-adherentes-datos.component.css']
})
export class CuentasAdherentesDatosComponent implements OnInit {

  verDatosOpen  : boolean = false

  constructor() { }

  ngOnInit(): void {
    this.verLocalAdherentes()
    this.click()
  }

  verLocalAdherentes(){
    
    const local = localStorage.getItem('ver_adherente');

    if(local){      
      // this.openEdit = true
      // this.openInfo = true  
      // localStorage.removeItem('ver_adherente')
      // this.router.navigate(['/cuentas/numero-de-cuenta/adherentes/datos'])
    }
  }

  @HostListener('click') click() {      
    const verDatos = localStorage.getItem('ver_datos')    
    if(verDatos){
      this.verDatosOpen = true
    }  
  }

}
