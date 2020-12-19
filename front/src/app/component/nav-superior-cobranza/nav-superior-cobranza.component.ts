import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-superior-cobranza',
  templateUrl: './nav-superior-cobranza.component.html',
  styleUrls: ['./nav-superior-cobranza.component.css']
})
export class NavSuperiorCobranzaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  storeCobranza(){
    localStorage.setItem('cobranza','true')
  }

}
