import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Requerimiento } from '../../interfaces/requerimientos.interface';
import { RequerimientosService } from '../../services/requerimientos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string  = '';
  requerimientos: Requerimiento[] = [];
  requerimientoSeleccionado: Requerimiento | undefined;

  constructor( private requerimientosService: RequerimientosService ) { }

  ngOnInit(): void {
  }


  buscando() {
    // OBTENER SUGERENCIAS - API
    this.requerimientosService.getSugerencias( this.termino.trim() )
      .subscribe( requerimientos => this.requerimientos = requerimientos );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.requerimientoSeleccionado = undefined;
      return;
    }
    console.warn(event.option.value);

    const requerimiento: Requerimiento = event.option.value;
    // Busqueda por SuperHero
    this.termino = requerimiento.first_appearance;

    // OBTENER UNO - API
    this.requerimientosService.getRequerimientoPorId( requerimiento.id! )
      .subscribe( requerimiento => { // USA INTERFACE requerimiento
        this.requerimientoSeleccionado = requerimiento;
       } );
  }

}
