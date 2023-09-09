import { Component, OnInit } from '@angular/core';
import { LoginService } from '../state/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  usuario: string;

  constructor(private loginService: LoginService) {
    this.usuario = this.loginService.getUsuarioo(); 

  }

  ngOnInit() {
    // Tu lógica de inicialización aquí
  }
  
}