import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { RequerimientosRoutingModule } from './requerimientos-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RequerimientoTarjetaComponent } from './components/requerimiento-tarjeta/requerimiento-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { RequerimientoComponent } from './pages/requerimiento/requerimiento.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    RequerimientoComponent,
    InicioComponent,
    ListadoComponent,
    RequerimientoTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    RequerimientosRoutingModule
  ]
})
export class RequerimientosModule { }
