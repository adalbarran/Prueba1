import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../state/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-contrasena',
  templateUrl: './rest-contrasena.page.html',
  styleUrls: ['./rest-contrasena.page.scss'],
})
export class RestContrasenaPage implements OnInit {
  usuario: string;

  FormRestUsuario:FormGroup;

  constructor(private fb:FormBuilder, private loginService: LoginService, private router:Router) {  
    private stateService: LoginService  
    this.usuario = this.loginService.getNombreUsuario(); 
    this.FormRestUsuario = this.fb.group({
    nombre_usuario: [''],

  })

}

  ngOnInit() {
  }



  RestUsuario() {

    
    const usuario= {
      
      nombre_usuario: this.FormRestUsuario.get('nombre_usuario')?.value,

      

    }

    if (!usuario.nombre_usuario) {
      
      this.router.navigate(['/crear-usuario']);
      
      return;
    }

    if (usuario.nombre_usuario == this.FormRestUsuario.get('nombre_usuario')?.value ) {
    const nombreUsuario = this.FormRestUsuario.get('nombre_usuario')?.value;
    // Si los campos no están vacíos, puedes proceder con la autenticación o redirección.
    // Agrega tu lógica de autenticación aquí.

    usuario.nombre_usuario = nombreUsuario;
      
      this.loginService.setNombreUsuario(nombreUsuario);
      this.router.navigate(['']);

    }


  }  
}
