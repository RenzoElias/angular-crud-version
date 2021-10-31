import { Component, Input } from '@angular/core';
import { Requerimiento } from '../../interfaces/requerimientos.interface';

@Component({
  selector: 'app-requerimiento-tarjeta',
  templateUrl: './requerimiento-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class RequerimientoTarjetaComponent{

  // PROPS INPUT // SE LE PONE ( ! ) PARA QUE NO SE QUEJE DE NO ESTAR INICIALIZADO ESA VARIABLE
  @Input() requerimiento!: Requerimiento;

}
