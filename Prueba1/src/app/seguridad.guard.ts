import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './state/login.service';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {

  constructor(    
    private stateservice : LoginService,
    private router : Router
    ){}

    canActivate(): boolean{
    
      let isLogged:boolean = false;                                                                                                                                                                                                                 
      this.stateservice.userIsLogged().subscribe((value) => {
        isLogged = value;
        if(isLogged == false){
          this.router.navigateByUrl('');
        }
      })
  
      return isLogged;
  
    }


}
