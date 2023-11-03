import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SeguridadGuard } from './seguridad.guard';

const routes: Routes = [
  {
    path: 'inicio',
    canActivate:[SeguridadGuard],
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./ingreso-usuario/ingreso-usuario.module').then( m => m.IngresoUsuarioPageModule)
  },
  {
    path: 'rest',
    canActivate:[SeguridadGuard],
    loadChildren: () => import('./rest-contrasena/rest-contrasena.module').then( m => m.RestContrasenaPageModule)
  },

  {
    path: 'buscador',
    canActivate:[SeguridadGuard],
    loadChildren: () => import('./buscador/buscador.module').then( m => m.BuscadorPageModule)
  },
  {
    path: 'usuario-buscado',
    canActivate:[SeguridadGuard],
    loadChildren: () => import('./usuario-buscado/usuario-buscado.module').then( m => m.UsuarioBuscadoPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
