import { Component, OnInit } from '@angular/core';
import { ApiService } from '../state/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.page.html',
  styleUrls: ['./listado-usuarios.page.scss'],
})
export class ListadoUsuariosPage implements OnInit {
  public usuarios: any;

  constructor( private api: ApiService, private router:Router, ) { }

  ngOnInit() {
    this.api.getApi().subscribe((data)=>{
      console.log('Informacion del punto de encuentro', data);
      this.usuarios = data;
      localStorage.setItem('users', JSON.stringify(data.users));
    }
    )
  }
  irinicio(){
    this.router.navigate(['/inicio'])
  }

  irdetalle( usuarios : any){
    console.log('Usuario Seleccionado', usuarios)
    localStorage.setItem('users', JSON.stringify(usuarios))

    this.router.navigateByUrl('/detalle-usuario');  
  }
}
