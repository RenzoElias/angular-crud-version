import { Component, Input } from '@angular/core';
import { ListRequirements } from '../../interfaces/requirements.interface';

@Component({
  selector: 'app-requirement-tarjeta',
  templateUrl: './requirement-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class RequirementTarjetaComponent{

  // PROPS INPUT // SE LE PONE ( ! ) PARA QUE NO SE QUEJE DE NO ESTAR INICIALIZADO ESA VARIABLE
  @Input() requirement!: ListRequirements;

}
