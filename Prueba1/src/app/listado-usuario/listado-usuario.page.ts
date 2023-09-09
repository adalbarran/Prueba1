import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../state/login.service';

interface Usuarios {
  nombre_usuario: String,
  contrasena: String,
}
@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.page.html',
  styleUrls: ['./listado-usuario.page.scss'],
})
export class ListadoUsuarioPage implements OnInit {
  usuario : Usuarios[] = [
    {
      nombre_usuario: 'Esteban',
      contrasena: 'Esteban123'
    },

  ]
  constructor(private LoginService:LoginService) { }

  ngOnInit() {
  }

}
