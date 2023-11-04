import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoUsuariosPageRoutingModule } from './listado-usuarios-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListadoUsuariosPage } from './listado-usuarios.page';
import { ApiService } from '../state/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoUsuariosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListadoUsuariosPage],
  providers:  [ApiService]
})
export class ListadoUsuariosPageModule {}
