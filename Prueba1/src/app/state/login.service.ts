import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario:BehaviorSubject<string> = new BehaviorSubject('Nombre usuario');

  get getUsuario(){
    return this.usuario.asObservable();
  }

  set setUsuario(usuario:string){
    this.usuario.next(usuario);
  }

  constructor() { }
}
