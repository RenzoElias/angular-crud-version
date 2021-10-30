import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../../services/solicitudes.service';
import { Solicitud } from '../../interfaces/solicitudes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  //TODO: INTERFACE QUE RECIBIRA DEL BACK
  solicitudes: Solicitud[] = [];

  constructor( private solicitudesService: SolicitudesService ) { }

  ngOnInit(): void {

    // GUARDAR ARREGLO
    this.solicitudesService.getSolicitudes()
      .subscribe( solicitudes => this.solicitudes = solicitudes );

  }

}
