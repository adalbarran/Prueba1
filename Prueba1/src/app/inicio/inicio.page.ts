import { Component, OnInit } from '@angular/core';
import { LoginService } from '../state/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  nombreUsuario: string;

  constructor(private loginService: LoginService) {
    this.nombreUsuario = this.loginService.getNombreUsuario(); 
  }

  ngOnInit() {
    // Tu lógica de inicialización aquí
  }
  

}