import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private usuario: any[] = [];

  constructor() { }

  register(nombre: string, password: string) {
    const nuevoUsuario = { nombre, password };
    this.usuario.push(nuevoUsuario);
    localStorage.setItem('users', JSON.stringify(this.usuario));
  }

  login(nombre: string, password: string): boolean {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = storedUsers.find((u: any) =>  u.nombre === nombre && u.password === password);
    return !!user;
  }

}
