import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import{ LoginService} from '../state/login.service';

interface Usuarios {
  nombre_usuario: String,
  contrasena: String,
}

@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {

  FormCrearUsuario:FormGroup;

  usuariooo : Usuarios[] = [
    {
      nombre_usuario: '',
      contrasena: ''
    },

  ]

  constructor(private fb:FormBuilder, private router:Router, private loginService: LoginService) {
    this.FormCrearUsuario = this.fb.group({
      nombre_usuario: [''],
      contrasena: ['']
    })
    
   }

  ngOnInit() {
  }



  crearUsuario() {

    
    const usuario= {
      
      nombre_usuario: this.FormCrearUsuario.get('nombre_usuario')?.value,
      contrasena: this.FormCrearUsuario.get('contrasena')?.value,

      

    }

    if (!usuario.nombre_usuario || !usuario.contrasena) {
      
      this.router.navigate(['/crear-usuario']);
      
      return;
    }

    if (usuario.nombre_usuario == this.FormCrearUsuario.get('nombre_usuario')?.value ) {
    const nombreUsuario = this.FormCrearUsuario.get('nombre_usuario')?.value;
    // Si los campos no están vacíos, puedes proceder con la autenticación o redirección.
    // Agrega tu lógica de autenticación aquí.

    usuario.nombre_usuario = nombreUsuario;
      
      this.loginService.setNombreUsuario(nombreUsuario);
      this.router.navigate(['']);

    }


  }  



}
