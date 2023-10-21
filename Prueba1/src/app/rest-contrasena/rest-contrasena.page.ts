import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-contrasena',
  templateUrl: './rest-contrasena.page.html',
  styleUrls: ['./rest-contrasena.page.scss'],
})
export class RestContrasenaPage implements OnInit {
  formularioRecuperar:FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { 
    this.formularioRecuperar = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]

  })
}
  
  ngOnInit() {
  }

  volveralogin(){
    this.router.navigate(['/inicio'])
  }
  volveraingresousuario(){
    this.router.navigate([''])
  }
}
