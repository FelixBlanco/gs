import { Component, OnInit, HostListener, Input, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-superior',
  templateUrl: './nav-superior.component.html',
  styleUrls: ['./nav-superior.component.css']
})
export class NavSuperiorComponent implements OnInit {
    
  cuentasOpens : any = []
  isOpenTabSuperior : boolean = false
  editTabHorizontal : any = []

  constructor(
    private route : Router
  ) {}
   
   ngOnInit(): void {        
  
    if(localStorage.getItem('tabSuperior')){
      this.isOpenTabSuperior = true 
      this.allTabs() // Cargamos los tabs
    }        
  }

  allTabs(){        
    this.cuentasOpens = []
    const d : any = JSON.parse(localStorage.getItem('tabSuperior')) // Tomamos el JSON    
    if(d  != null && d != [] && d.length ){
      d.forEach(element => { this.cuentasOpens.push(element) }); // Recorremos la lista    
    }
  }

  storeCuenta(){    
    localStorage.setItem('user','true')
  }

  deleteTab(posicion){
    localStorage.removeItem('tabSuperior')    
    this.cuentasOpens.splice(posicion, 1);
    localStorage.setItem('tabSuperior',JSON.stringify(this.cuentasOpens))      

    /**
     * Si es = 0 que elimine el localStorage
     */
    const localS = JSON.parse(localStorage.getItem('tabSuperior'))
    const lengthLocal = Object.keys( localS ).length
    if(lengthLocal == 0){
      localStorage.removeItem('tabSuperior')  
      this.route.navigate(['/buscar'])
    }

  }  

  /**
   * config active del tab
   */

  irOpenNav(url,position){          

    localStorage.removeItem('tabSuperior') // eliminamos localStorage

    this.cuentasOpens.forEach((element,i) => {
      (i == position) ? element.active = true : element.active = false            
      this.editTabHorizontal.push(element)        
    });
            
    localStorage.setItem('tabSuperior', JSON.stringify(this.editTabHorizontal)) // lo volvemos a crear con los cambios
    
    this.editTabHorizontal = [] // reset
    
    this.allTabs() // actualizamos el tab

    this.route.navigate([url])
  }
}
