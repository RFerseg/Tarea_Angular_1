import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';

const routes: Routes = [
  //Rutas
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'mantenimiento',
    component: MantenimientoComponent
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
