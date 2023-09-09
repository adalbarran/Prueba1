import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoUsuarioPage } from './listado-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoUsuarioPageRoutingModule {}
