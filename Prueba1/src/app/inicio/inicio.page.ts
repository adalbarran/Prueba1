import { Component, OnInit } from '@angular/core';
import { LoginService } from '../state/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  public nombre : string = ''

  constructor(private loginService: LoginService, private router:Router) {
    this.loginService.getNombre.subscribe((nombre)=> {this.nombre = nombre})
  }

  ngOnInit() {

  }
  volverlogin(){
    this.router.navigate(['/ingreso-usuario'])
  }

}