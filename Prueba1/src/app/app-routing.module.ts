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
    loadChildren: () => import('./rest-contrasena/rest-contrasena.module').then( m => m.RestContrasenaPageModule)
  },



  {
    path: 'listado-usuarios',
    canActivate:[SeguridadGuard],
    loadChildren: () => import('./listado-usuarios/listado-usuarios.module').then( m => m.ListadoUsuariosPageModule)
  },
  {
    path: 'detalle-usuario',
    loadChildren: () => import('./detalle-usuario/detalle-usuario.module').then( m => m.DetalleUsuarioPageModule)
  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
