import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../state/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router,private Registro: RegistroService) {

    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required ],
      password: ['', Validators.required],
    });
    
   }

   register() {
    const nombre = this.registroForm.get('nombre')?.value;
    const password = this.registroForm.get('password')?.value;

    this.Registro.register(nombre, password);
    this.router.navigate([''])
    // Puedes agregar una lógica adicional después del registro si es necesario
  }
















  ngOnInit() {
  }

}
