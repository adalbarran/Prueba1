import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private nombreUsuario: string = '';


  getNombreUsuario() {
    return this.nombreUsuario;
  }

  setNombreUsuario(Nombre: string) {
    this.nombreUsuario = Nombre;
  }

  constructor() { }
}