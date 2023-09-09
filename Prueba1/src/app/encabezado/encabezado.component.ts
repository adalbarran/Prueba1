import { Component, OnInit } from '@angular/core';
import{ LoginService} from '../state/login.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent  implements OnInit {

  usuario: string = ''


  constructor(private LoginService: LoginService) { }

  ngOnInit() {
    this.LoginService.getUsuario.subscribe((usuario) =>{
      this.usuario = usuario;
      
    })
  }

}
