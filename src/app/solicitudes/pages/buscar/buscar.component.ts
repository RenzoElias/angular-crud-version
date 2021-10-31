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
    // OBTENER SUGERENCIAS - API
    this.solicitudesService.getSugerencias( this.termino.trim() )
      .subscribe( solicitudes => this.solicitudes = solicitudes );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.solicitudSeleccionado = undefined;
      return;
    }
    console.warn(event.option.value);

    const solicitud: Solicitud = event.option.value;
    // Busqueda por SuperHero
    this.termino = solicitud.first_appearance;

    // OBTENER UNO - API
    this.solicitudesService.getSolicitudPorId( solicitud.id! )
      .subscribe( solicitud => { // USA INTERFACE SOLICITUD
        this.solicitudSeleccionado = solicitud;
       } );
  }

}
