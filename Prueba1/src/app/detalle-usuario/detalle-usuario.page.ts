import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.page.html',
  styleUrls: ['./detalle-usuario.page.scss'],
})
export class DetalleUsuarioPage implements OnInit {
  public usuario : any;

  constructor( private router: Router ) { }

  ngOnInit() {

    const usuario = localStorage.getItem('User');
    if (usuario == null){

    } 
    else{
      this.usuario = JSON.parse(usuario);

    }

  }
volver(){
  this.router.navigateByUrl('/listado-usuario');

  }

}
