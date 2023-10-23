import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioBuscadoPageRoutingModule } from './usuario-buscado-routing.module';

import { UsuarioBuscadoPage } from './usuario-buscado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioBuscadoPageRoutingModule
  ],
  declarations: [UsuarioBuscadoPage]
})
export class UsuarioBuscadoPageModule {}
