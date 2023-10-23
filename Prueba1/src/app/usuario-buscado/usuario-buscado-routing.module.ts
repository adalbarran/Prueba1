import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioBuscadoPage } from './usuario-buscado.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioBuscadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioBuscadoPageRoutingModule {}
