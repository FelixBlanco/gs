import { Component, OnInit, Input, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar-lateral-uno',
  templateUrl: './navbar-lateral-uno.component.html',
  styleUrls: ['./navbar-lateral-uno.component.css']
})
export class NavbarLateralUnoComponent implements OnInit {

  @Input('isActiveDatos') isActiveDatos : boolean 
  @Input() isNuevo : boolean = false
  
  constructor() {}
  
  ngOnInit(): void {
    localStorage.setItem('user','true')    
    localStorage.removeItem('cobranza')    
  }
}
