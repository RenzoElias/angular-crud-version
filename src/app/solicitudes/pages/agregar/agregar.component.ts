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
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor( private solicitudesService: SolicitudesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar') ) {
      console.log('NO HAY RUTA EDITAR')
      return;
    }

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.solicitudesService.getSolicitudPorId( id ) )
      )
      .subscribe( solicitud => this.solicitud = solicitud );


    console.log('RESULT', this.solicitud);
  }

  guardar() {

    if( this.solicitud.superhero.trim().length === 0  ) {
      return;
    }

    if ( this.solicitud.id ) {
      // Actualizar
      this.solicitudesService.actualizarSolicitud( this.solicitud )
        .subscribe( solicitud => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.solicitudesService.agregarSolicitud( this.solicitud )
        .subscribe( solicitud => {
          this.router.navigate(['/heroes/editar', solicitud.id ]);
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

        if( result ) {
          this.solicitudesService.borrarSolicitud( this.solicitud.id! )
            .subscribe( resp => {
              this.router.navigate(['/heroes']);
            });
        }

      }
    )
  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }

}
