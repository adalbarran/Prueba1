import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ingreso-usuario',
    loadChildren: () => import('./ingreso-usuario/ingreso-usuario.module').then( m => m.IngresoUsuarioPageModule)
  },
  {
    path: 'rest-contrasena',
    loadChildren: () => import('./rest-contrasena/rest-contrasena.module').then( m => m.RestContrasenaPageModule)
  },
  {
    path: 'listado-usuario',
    loadChildren: () => import('./listado-usuario/listado-usuario.module').then( m => m.ListadoUsuarioPageModule)
  },  {
    path: 'crear-usuario',
    loadChildren: () => import('./crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
