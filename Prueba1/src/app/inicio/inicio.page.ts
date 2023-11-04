import { Component, OnInit } from '@angular/core';
import { LoginService } from '../state/login.service';
import { Router } from '@angular/router';
import { ApiService } from '../state/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {
  public nombre : string = '';

  public usuarios: any;
  public datos: any;

  constructor(private loginService: LoginService, private router:Router, private api: ApiService) {
    this.loginService.getNombre.subscribe((nombre)=> {this.nombre = nombre})
  } 

  ngOnInit() {
    this.api.getApi().subscribe((data)=>{
      console.log('Informacion del punto de encuentro', data);
      this.usuarios = data;
      localStorage.setItem('users', JSON.stringify(data.users));
    }
    )
  }

  volverlogin(){
    this.router.navigate(['/ingreso-usuario'])
  }

  irlistado(){
    this.router.navigate(['/listado-usuarios'])

  }

}