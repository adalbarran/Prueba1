import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../state/api.service';
import { LoginService } from '../state/login.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

  public datos: any;

  constructor(
    private router: Router, private api: ApiService, private state: LoginService
  ) { }

  ngOnInit(): void {
    this.api.getUsuario().subscribe((data)=>{
      console.log('Buscar Usuario', data);
      this.datos = data;
      localStorage.setItem('datos', JSON.stringify(data.result));
    }
    )
  }

  buscar(users:any){
    console.log('Usuario buscado =>', users);
    this.router.navigateByUrl('/usuario-buscado');
    localStorage.setItem('user', JSON.stringify(users));
  }

}
