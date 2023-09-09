import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {

  FormCrearUsuario:FormGroup;


  constructor(private fb:FormBuilder, private router:Router) {
    this.FormCrearUsuario = this.fb.group({
      nombre_usuario: [''],
      contrasena: ['']
    })
   }

  ngOnInit() {
  }
  grabarUsuario() {

    
    const usuario= {
      
      nombre_usuario: this.FormCrearUsuario.get('nombre_usuario')?.value,
      contrasena: this.FormCrearUsuario.get('contrasena')?.value,

    }
    console.log(usuario)

  }

  crearUsuario() {

    
    const usuario= {
      
      nombre_usuario: this.FormCrearUsuario.get('nombre_usuario')?.value,

      
      contrasena: this.FormCrearUsuario.get('contrasena')?.value,


  

    }

    if (usuario.nombre_usuario) {
      console.log(usuario)
      return
    }



  }  

  volverlistado(){
    this.router.navigate(['/listar-usuario'])
  }

}
