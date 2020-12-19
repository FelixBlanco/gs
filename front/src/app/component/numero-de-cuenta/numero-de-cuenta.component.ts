import { Component, OnInit, HostListener } from '@angular/core';
import { MenuLateralService } from 'src/app/services/menu-lateral.service';

@Component({
  selector: 'app-numero-de-cuenta',
  templateUrl: './numero-de-cuenta.component.html',
  styleUrls: ['./numero-de-cuenta.component.css']
})
export class NumeroDeCuentaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  localVerAdherente(){
    localStorage.setItem('ver_adherente','true')
  }
}



@Component({
  selector: 'app-numero-de-cuenta-init',
  templateUrl: './numero-de-cuenta.component-init.html',
  styleUrls: ['./numero-de-cuenta.component.css']
})
export class NumeroDeCuentaInitComponent implements OnInit {

  constructor(
    private _menu : MenuLateralService
  ) { }

  ngOnInit(): void {    
  }

}
