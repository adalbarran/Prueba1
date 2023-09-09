import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EncabezadoComponent} from './encabezado.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [EncabezadoComponent],
  exports: [EncabezadoComponent]
})
export class encabezadoModule {} 