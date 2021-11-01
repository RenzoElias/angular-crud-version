import { Component, Input } from '@angular/core';
import { ListSolicitudes } from '../../interfaces/solicitudes.interface';

@Component({
  selector: 'app-solicitud-tarjeta',
  templateUrl: './solicitud-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class SolicitudTarjetaComponent{

  // PROPS INPUT // SE LE PONE ( ! ) PARA QUE NO SE QUEJE DE NO ESTAR INICIALIZADO ESA VARIABLE
  @Input() solicitud!: ListSolicitudes;

}
