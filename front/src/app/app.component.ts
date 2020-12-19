import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarLateralComponent } from './component/navbar-lateral/navbar-lateral.component';
import { NavSuperiorComponent } from './component/nav-superior/nav-superior.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  
  panelOpenState = false;
  openUser : boolean = false
  openCobranza : boolean = false

  @ViewChild(NavbarLateralComponent) navLateral : NavbarLateralComponent
  @ViewChild(NavSuperiorComponent) navSuperior : NavSuperiorComponent

  constructor(
    protected router : Router
  ){}

  ngOnInit(): void {      
      
    const userTab = localStorage.getItem('user')
    
    // if(userTab != null || userTab != ''){
    //   this.router.navigate(['/cuentas/numero-de-cuenta/adherentes'])
    // }
    
  }
  /**
   * Cada vez que demos click en el proyecto
   * se ejecuten las siguientes acciones
   */
  @HostListener('click') click() {        
    
    this.navLateral.openNav()  // actualice el nav-lateral

    // this.navSuperior.allTabs() // Actualizamos cada vez que demos click
  }

}
