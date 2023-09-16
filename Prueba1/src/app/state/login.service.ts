import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private nombreUsuario: BehaviorSubject<string> = new BehaviorSubject<string>('');


  getNombreUsuario() {
    return this.nombreUsuario.asObservable();
  }

  setNombreUsuario(nombreUsuario: string) {
    this.nombreUsuario.next(nombreUsuario);
  }

  constructor() { }
}