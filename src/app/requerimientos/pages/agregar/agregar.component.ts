import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Requerimiento, Publisher } from '../../interfaces/requerimientos.interface';
import { RequerimientosService } from '../../services/requerimientos.service';
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

  requerimiento: Requerimiento = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.NuevoSistema,
    alt_img: '',
  }

  constructor( private requerimientosService: RequerimientosService,
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
      switchMap( ({id}) => this.requerimientosService.getRequerimientoPorId( id ) )
      )
      .subscribe( requerimiento => this.requerimiento = requerimiento );
  }

  guardar() {

    if( this.requerimiento.superhero.trim().length === 0  ) {
      return;
    }

    if ( this.requerimiento.id ) {
      // NOTE: Actualizar API
      this.requerimientosService.actualizarRequerimiento( this.requerimiento )
        .subscribe( requerimiento => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // NOTE: Crear API
      this.requerimientosService.agregarRequerimiento( this.requerimiento )
        .subscribe( requerimiento => {
          this.router.navigate(['/inicio/editar', requerimiento.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarRequerimiento() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.requerimiento
    });

    dialog.afterClosed().subscribe(
      (result) => {
        // Si presionas opcion borrar del dialog, el result ( Sera "true" )
        // BORRAR API
        if( result ) {
          this.requerimientosService.borrarRequerimiento( this.requerimiento.id! )
            .subscribe( resp => {
              this.router.navigate(['/inicio']);
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
