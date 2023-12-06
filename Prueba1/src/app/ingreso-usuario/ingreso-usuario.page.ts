import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ LoginService} from '../state/login.service';
import { RegistroService } from '../state/registro.service';

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

  loginForm: FormGroup;


  constructor(private fb:FormBuilder, private router:Router, private loginService: LoginService, private registro: RegistroService) {
    this.FormCrearUsuario = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
    
    this.loginForm = this.fb.group({
      nombre: ['', [Validators.required]],
      password: ['', Validators.required],
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

login() {
  const nombre = this.loginForm.get('nombre')?.value;
  const password = this.loginForm.get('password')?.value;

  if (this.registro.login(nombre, password)) {
    console.log('Inicio de sesión exitoso');
    this.router.navigate(['/inicio'])

    // Puedes agregar lógica adicional después del inicio de sesión si es necesario
  } else {
    console.log('Inicio de sesión fallido');
  }
}






}
