import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Solicitud } from '../../interfaces/solicitudes.interface';
import { SolicitudesService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string  = '';
  solicitudes: Solicitud[] = [];
  solicitudSeleccionado: Solicitud | undefined;

  constructor( private solicitudesService: SolicitudesService ) { }

  ngOnInit(): void {
  }


  buscando() {

    this.solicitudesService.getSugerencias( this.termino.trim() )
      .subscribe( solicitudes => this.solicitudes = solicitudes );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.solicitudSeleccionado = undefined;
      return;
    }

    const solicitud: Solicitud = event.option.value;
    this.termino = solicitud.superhero;

    this.solicitudesService.getSolicitudPorId( solicitud.id! )
      .subscribe( solicitud => this.solicitudSeleccionado = solicitud );
  }

}
