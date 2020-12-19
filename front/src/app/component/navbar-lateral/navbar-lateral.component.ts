import { Component, OnInit, HostListener, Input, ViewChild } from '@angular/core';
import { MenuLateralService } from 'src/app/services/menu-lateral.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css']
})
export class NavbarLateralComponent implements OnInit {
  
  step    : any = null // abre el navbar cuando le indiquemos
  cuenta  : any = [] // Informacion que mostraremos en nav
  lateralOpen : any = [] // indicador del tab que esta abierto

  acordionOpen : any = []

  acordeones : any = [
    {
      id : 0, 
      identificador : 'cuentas',
      title : 'Cuentas',
      expanded : false,
      isShow : true,
      list_nav : [
        { title : 'Nueva', url : 'cuentas/nueva' },
        { title : 'Buscar', url : 'buscar' },
      ]
    },
    {
      id : 1,
      identificador : 'cuentas_nro',
      title : 'Cuenta Nº',
      withData : false,
      data : '',
      expanded : false,
      isShow : false,
      list_nav : [
        { title : 'Nueva Adherente', url : 'cuentas/numero-de-cuenta/adherentes' },
      ],
      isShowNavTwo : false, 
      list_nav_two : [
        { title : ' Adherente 1', url : 'cuentas/numero-de-cuenta/adherentes' }, 
        { title : ' Adherente 2', url : 'cuentas/numero-de-cuenta/adherentes' }, 
        { title : ' Adherente 3', url : 'cuentas/numero-de-cuenta/adherentes' }, 
      ]       
    },    
    {
      id : 2,
      identificador : 'cobranza',
      title : 'Cobranzas',
      expanded : false,
      isShow : true,
      list_nav : [
        { title : 'Cobradores a domicilio',   url : 'cobradores-domicilio' },
        { title : 'Descuentos por planilla',  url : 'descuentos-planilla' },
        { title : 'Debito automaticos',       url : 'debitos-automaticos' },
        { title : 'Pagos en oficina',         url : 'pagos-oficina' },
      ]
    } 
    ,    
    {
      id : 3,
      identificador : 'planes',
      title : 'Planes',
      expanded : false,
      isShow : true,
      list_nav : [
        { title : 'Planes',   url : 'planes' },
      ]
    },    
    {
      id : 4,
      identificador : 'usuarios',
      title : 'Usuarios',
      expanded : false,
      isShow : true,
      list_nav : [
        { title : 'Usuarios',   url : 'usuarios' },
      ]
    }            
  ]


  constructor(
    private _menu : MenuLateralService,  
    private router : Router,    
  ) { }

  ngOnInit(): void {        
    this.openNav() // Activamos el efecto
  }

  deleteLocal(){    
    localStorage.removeItem('user');    
  }

  /** 
   * Cuando le damos click a el tab horizontal
   * vamos a mapear cual esta activo y que acordeon abrir
   */
  openNav(){         
    
    this.recorrido()   
  }

  /**
   * Recorrido de la informacion
   */

   recorrido(){
    
    const tabHorizontal = JSON.parse(localStorage.getItem('tabSuperior'))    

    if(tabHorizontal){
      tabHorizontal.map((t) => {    
        if(t.active == true){                 
          this.cualAcordion(t) // Enviamos el tab activo
          this.lateralOpen = t
        }
      })         
    }
   }

  /**
   * Open el nav lateral
   */
  cualAcordion(dataTabHorizontal){
    
    switch (dataTabHorizontal.type) { // Buscamos

      case 'cuentas':
        this.acordeones.find((a,index) => {
          if(a.id == 1){ // 1 del id 
            this.acordeones[index].withData = true // si tiene data
            this.acordeones[index].data     =  dataTabHorizontal.codigo+" "+dataTabHorizontal.user // data a mostrar en el tab
            this.acordeones[index].expanded = true // activar el acordeon
            this.acordeones[index].isShow   = true       
            this.acordionOpen = this.acordeones[index]   
            
            // El navTwo - esta activo
            if(dataTabHorizontal.active_two){
              this.acordeones[index].isShowNavTwo  = true              
            }
          }
        })        
        break;

      case 'cobranzas':
        this.changeAcordeon(2)
        break;

      case 'planes':
        this.changeAcordeon(3)  
        break;

      case 'usuarios':
        this.changeAcordeon(4)
        break;

      default:
        break;
    }    
  }

  /**
   * Optimizamos el recorrido
   */
  changeAcordeon(id){
    this.acordeones.find((a,index) => {      
      if(a.id == id){ // 2 del id                         
        this.acordeones[index].expanded = true // activar el acordeon
      }else{
        this.acordeones[index].expanded = false // todos los demas los cerramos
      }
    })    
  }

  navFalseClose(a){      

  }

}
