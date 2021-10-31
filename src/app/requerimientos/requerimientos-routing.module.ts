import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { RequerimientoComponent } from './pages/requerimiento/requerimiento.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const rutas: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      { path: 'listado', component: ListadoComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: RequerimientoComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class RequerimientosRoutingModule { }
