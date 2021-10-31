import { Component, OnInit } from '@angular/core';
import { RequerimientosService } from '../../services/requerimientos.service';
import { Requerimiento } from '../../interfaces/requerimientos.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  //TODO: INTERFACE QUE RECIBIRA DEL BACK
  requerimientos: Requerimiento[] = [];

  constructor( private requerimientosService: RequerimientosService ) { }

  ngOnInit(): void {

    // GUARDAR ARREGLO
    this.requerimientosService.getRequerimientos()
      .subscribe( requerimientos => this.requerimientos = requerimientos );

  }

}
