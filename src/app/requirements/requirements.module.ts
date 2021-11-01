import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { RequirementsRoutingModule } from './requirements-routing.module';
import { MaterialModule } from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { RequirementTarjetaComponent } from './components/requirement-tarjeta/requirement-tarjeta.component';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { RequirementComponent } from './pages/requirement/requirement.component';



@NgModule({
  declarations: [
    AgregarComponent,
    EditarComponent,
    RequirementComponent,
    HomeComponent,
    ListadoComponent,
    RequirementTarjetaComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    RequirementsRoutingModule
  ]
})
export class RequirementsModule { }
