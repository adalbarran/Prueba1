import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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



  constructor(private fb:FormBuilder, private router:Router, private loginService: LoginService) {
    this.FormCrearUsuario = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
    
   }

  ngOnInit() {
  }



  crearUsuario() {

    
    const usuario= {
      
      nombre: this.FormCrearUsuario.get('nombre')?.value,
      contrasena: this.FormCrearUsuario.get('contrasena')?.value,

      

    }


    console.log(usuario)
    this.loginService.setNombre = usuario.nombre
    this.loginService.setUserIsLogged(true);
    this.router.navigate(['/inicio'])
    



}



  }
