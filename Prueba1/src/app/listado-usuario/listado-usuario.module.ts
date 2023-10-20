import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoUsuarioPageRoutingModule } from './listado-usuario-routing.module';

import { ListadoUsuarioPage } from './listado-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoUsuarioPageRoutingModule,
  ],
  declarations: [ListadoUsuarioPage]
})
export class ListadoUsuarioPageModule {}
