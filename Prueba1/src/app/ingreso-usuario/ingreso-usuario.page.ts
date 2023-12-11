import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ LoginService} from '../state/login.service';
import { RegistroService } from '../state/registro.service';
import { AlertController } from '@ionic/angular';

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


  loginForm: FormGroup;


  constructor(private fb:FormBuilder, private router:Router, private loginService: LoginService, private registro: RegistroService, private alertController: AlertController) {

    this.loginForm = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });

   }

  ngOnInit() {
  }



async login() {
  const nombre = this.loginForm.get('nombre')?.value;
  const password = this.loginForm.get('password')?.value;

  if (this.registro.login(nombre, password)) {

    const usuario= {
      
      nombre: this.loginForm.get('nombre')?.value,
      password: this.loginForm.get('password')?.value,

      

    }


    console.log(usuario)
    this.loginService.setNombre = usuario.nombre
    this.loginService.setUserIsLogged(true);
    this.router.navigate(['/inicio'])

    console.log('Inicio de sesión exitoso');
    await this.presentAlert('Inicio de sesión exitoso');
    this.router.navigate(['/inicio'])

    // Puedes agregar lógica adicional después del inicio de sesión si es necesario
  } else {
    console.log('Inicio de sesión fallido');
    await this.presentAlert('Inicio de sesión fallido, reintente nuevamente');

  }
}

async presentAlert(message: string) {
  const alert = await this.alertController.create({
    header: 'Mensaje',
    message,
    buttons: ['OK']
  });

  await alert.present();
}




}
