import { Component, Input } from '@angular/core';
import { Solicitud } from '../../interfaces/solicitudes.interface';

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

  @Input() solicitud!: Solicitud;

}
