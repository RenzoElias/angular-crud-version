import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { SolicitudTarjetaComponent } from './components/solicitud-tarjeta/solicitud-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    SolicitudComponent,
    HomeComponent,
    ListadoComponent,
    SolicitudTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
