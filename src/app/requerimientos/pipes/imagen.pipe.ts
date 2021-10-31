import { Pipe, PipeTransform } from '@angular/core';
import { Requerimiento } from '../interfaces/requerimientos.interface';

@Pipe({
  name: 'imagen',
  // pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( requerimiento: Requerimiento ): string {

    if( !requerimiento.id && !requerimiento.alt_img ) {
      return 'assets/no-image.png';
    } else if ( requerimiento.alt_img ) {
      return requerimiento.alt_img;
    } else {
      return `assets/requerimientos/${ requerimiento.id }.jpg`;
    }


  }

}
