import { Pipe, PipeTransform } from '@angular/core';
import { Solicitud } from '../interfaces/solicitudes.interface';

@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( solicitud: Solicitud ): string {

    if( !solicitud.id && !solicitud.descripcion ) {
      return 'assets/no-image.png';
    } else if ( solicitud.descripcion ) {
      return solicitud.descripcion;
    } else {
      return `assets/solicitudes/${ solicitud.id }.jpg`;
    }


  }

}
