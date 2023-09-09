import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuarioo: string = '';



  setUsuarioo(usuario: string) {
    this.usuarioo = usuario;
  }
  getUsuarioo() {
    return this.usuarioo;
  }

  constructor() { }
}