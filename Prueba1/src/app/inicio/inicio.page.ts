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

  public users: any;

  constructor(private loginService: LoginService, private router:Router, private api: ApiService) {
    this.loginService.getNombre.subscribe((nombre)=> {this.nombre = nombre})
  } 

  ngOnInit(): void {
    this.api.getApi().subscribe((data)=>{
      console.log('Informacion del punto de encuentro', data);
      this.users = data;
      localStorage.setItem('users', JSON.stringify(data.result));
    }
    )
  }

  detalle(users:any){
    console.log('Usuarios =>', users);
    this.router.navigateByUrl('/detalle');
    localStorage.setItem('user', JSON.stringify(users));
  }

  volverlogin(){
    this.router.navigate(['/ingreso-usuario'])
  }

}