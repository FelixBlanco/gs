import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListaDatosService {
  
  nuevos_datos : any = []

  constructor(
    private route : Router
  ) { }


  onlyDato(datos){
    this.nuevos_datos.push(datos) // nuevo dato
    localStorage.setItem('tabSuperior', JSON.stringify(this.nuevos_datos) ) // guardamos en local
    this.nuevos_datos = [] // Eliminamos el residuo      
  }



  listaDatos(datos,urlDestino = null){
    
    const dataLocal = JSON.parse(localStorage.getItem('tabSuperior'))
    
    if(dataLocal){

      /**
       * verificar si ya esta que no lo 
       * vuelva a crear, por el codigo
       * o si no lo encuentra
       */

      let seachData  : any 

      seachData = dataLocal.find((d) => { 
        if(d.codigo == datos.codigo){        
          return d      
        }
      })
            
      if(seachData == undefined){ // no existe , creamos

        const tabHorizontal : any = JSON.parse(localStorage.getItem('tabSuperior')) // Pedimos los valores

        if( tabHorizontal == null || tabHorizontal == [] ){ // Si no hay datos que agrege el dato
          
          this.onlyDato(datos)
        
        }else{ // Si no, quiere decir que hay una lista de objetos
        
          // Guardamos de nuevo los que tenemos
          tabHorizontal.map(e => {
            e.active = false
            this.nuevos_datos.push(e)
          } ) 
        
          this.onlyDato(datos)
        }
        
        /**
         * En el caso que quieran redireccionar 
         * a otra vista. 
         */
        
        if(urlDestino != null){
          this.route.navigate([urlDestino]) // redireccionamos     
        }
      }    
      
    }else{
      this.onlyDato(datos) 
    }

    this.route.navigate(['/cuentas/numero-de-cuenta/datos'])

  }



  navbarTwo(){

    const tabHorizontal : any = JSON.parse(localStorage.getItem('tabSuperior')) // Pedimos los valores

    /**
     * Editamos donde vamos a colocar activo 
     * el navbar lateral
     */
    tabHorizontal.map(e => {
      if(e.type == 'cuentas'){ // Solo cuentas 
        e.active_two = true
        this.nuevos_datos.push(e)        
      }
    }) 

    localStorage.setItem('tabSuperior', JSON.stringify(this.nuevos_datos) ) // guardamos en local
    this.nuevos_datos = [] // Eliminamos el residuo    
  }

}
