import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Solicitud, Publisher } from '../../interfaces/solicitudes.interface';
import { SolicitudesService } from '../../services/solicitudes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'Nuevo Sistema',
      desc: 'Nuevo Sistema'
    },
    {
      id: 'Mejorar Sistema',
      desc: 'Mejorar Sistema'
    },
  ];

  solicitud: Solicitud = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.NuevoSistema,
    alt_img: '',
  }

  constructor( private solicitudesService: SolicitudesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    // Si no incluye la URL  ( /editar )
    if( !this.router.url.includes('editar') ) {
      return;
    }

    // Extraer el parametro PARAMS ( /:id ) // Get One API
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.solicitudesService.getSolicitudPorId( id ) )
      )
      .subscribe( solicitud => this.solicitud = solicitud );
  }

  guardar() {

    if( this.solicitud.superhero.trim().length === 0  ) {
      return;
    }

    if ( this.solicitud.id ) {
      // NOTE: Actualizar API
      this.solicitudesService.actualizarSolicitud( this.solicitud )
        .subscribe( solicitud => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // NOTE: Crear API
      this.solicitudesService.agregarSolicitud( this.solicitud )
        .subscribe( solicitud => {
          this.router.navigate(['/home/editar', solicitud.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarSolicitud() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.solicitud
    });

    dialog.afterClosed().subscribe(
      (result) => {
        // Si presionas opcion borrar del dialog, el result ( Sera "true" )
        // BORRAR API
        if( result ) {
          this.solicitudesService.borrarSolicitud( this.solicitud.id! )
            .subscribe( resp => {
              this.router.navigate(['/home']);
            });
        }

      }
    )
  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'OK!', {
      duration: 2500
    });

  }

}
