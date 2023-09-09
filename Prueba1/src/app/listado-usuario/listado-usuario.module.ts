import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoUsuarioPageRoutingModule } from './listado-usuario-routing.module';

import { ListadoUsuarioPage } from './listado-usuario.page';
import { encabezadoModule } from '../encabezado/encabezado.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoUsuarioPageRoutingModule,
    encabezadoModule
  ],
  declarations: [ListadoUsuarioPage]
})
export class ListadoUsuarioPageModule {}
