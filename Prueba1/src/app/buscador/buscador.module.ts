import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscadorPageRoutingModule } from './buscador-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { BuscadorPage } from './buscador.page';
import { ApiService } from '../state/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscadorPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BuscadorPage],
  providers: [ApiService]
})
export class BuscadorPageModule {}
