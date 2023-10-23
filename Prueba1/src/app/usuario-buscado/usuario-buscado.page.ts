import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-buscado',
  templateUrl: './usuario-buscado.page.html',
  styleUrls: ['./usuario-buscado.page.scss'],
})
export class UsuarioBuscadoPage implements OnInit {

  public users: any;

  constructor() { }

  ngOnInit() {
    const _users = localStorage.getItem('user');
    if(_users == null){

    }
    else{
      this.users = JSON.parse(_users);
    }
  }

}
