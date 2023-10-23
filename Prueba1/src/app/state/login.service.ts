import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:BehaviorSubject<any> = new BehaviorSubject(null);
  user:BehaviorSubject<any> = new BehaviorSubject(null);
  
  nombre:BehaviorSubject<string> = new BehaviorSubject('');
  
  private isLogged:BehaviorSubject<boolean> = new BehaviorSubject <boolean>(false);


  //NOMBRE USUARIO
  get getNombre(){
    return  this.nombre.asObservable();
  }

  set setNombre(nombre: string){
    this.nombre.next(nombre)
  }


  //LOGIN
   getIsLogged(){
    return this.isLogged.asObservable();
  }

   SetIsLogged(value:boolean){
     this.isLogged.asObservable();
  }

  //API
  public obtenerUsers(){
    return this.users.asObservable();
  }

  public usersValues(users:any){
    this.users.next(users)
  }  

  constructor() { }
}