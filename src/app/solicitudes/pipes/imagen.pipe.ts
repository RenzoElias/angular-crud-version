import { Pipe, PipeTransform } from '@angular/core';
import { Solicitud } from '../interfaces/solicitudes.interface';

@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( solicitud: Solicitud ): string {

    if( !solicitud.id && !solicitud.alt_img ) {
      return 'assets/no-image.png';
    } else if ( solicitud.alt_img ) {
      return solicitud.alt_img;
    } else {
      return `assets/solicitudes/${ solicitud.id }.jpg`;
    }


  }

}
