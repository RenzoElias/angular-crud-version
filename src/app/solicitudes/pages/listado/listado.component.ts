import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';
import { UserSolicitud, ListSolicitudes } from '../../interfaces/solicitudes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  //TODO: INTERFACE QUE RECIBIRA DEL BACK
  solicitudes: ListSolicitudes[] = [];

  // userSolicitud!: UserSolicitud;

  constructor( private solicitudesService: SolicitudesService ) { }

  ngOnInit(): void {

    // GUARDAR ARREGLO
    // this.solicitudesService.getSolicitudes()
    //   .subscribe( solicitudes => this.solicitudes = solicitudes );
    this.solicitudesService.getAllSolicitud()
      .subscribe((data: any) => {
        const {result} = data;
        console.warn('result', result);

        this.solicitudes = result;
      });

    // this.solicitudesService.getUserSolicitudPorId(1)
    // .subscribe((data: any) => {
    //   const {result} = data;
    //   this.userSolicitud = result;
    // });

  }

}
