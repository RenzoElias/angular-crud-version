import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { SendEditarSolicitud, ResponseI, ReqTipoSolicitud, UserSolicitud, ListSolicitudes } from '../../interfaces/solicitudes.interface';
import { SolicitudesService } from '../../services/solicitudes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class EditarComponent implements OnInit {

  solicitud!: ListSolicitudes;
  reqTipoSolicitudes: ReqTipoSolicitud[] = [];


  sendEditarSolicitud: SendEditarSolicitud = {
    descripcion: '',
    idUsuarioSolicitante: 3,
    id003AreaSolicitante: 8,
    id005TipoSolicitud: 18,
  }
  // sendSolicitud: SendSolicitud = {
  //   area: '',
  //   area_cargo: '',
  //   area_destino: '',
  //   nombre: '',
  //   tipo: 20,
  //   descripcion: '',
  // }


  constructor( private solicitudesService: SolicitudesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.solicitudesService.getAllTipoSolicitud()
      .subscribe((data: any) => {
        const {result} = data;
        this.reqTipoSolicitudes = result;
      });

    if( !this.router.url.includes('editar') ) {
      return;
    }


    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.solicitudesService.getSolicitudPorId( id ) )
      )
      .subscribe((data: any) => {
        const {result} = data;
        console.warn('result',result[0]);

        this.solicitud = result[0];
      });
  }

  guardar() {

    // if( this.solicitud.area.trim().length === 0  ) {
    //   return;
    // }

    // if ( this.solicitud.id ) {
    //   // NOTE: Actualizar Editar API
    //   console.log("solicitud", this.solicitud);
    //   console.log("sendSolicitud", this.sendSolicitud);

    //   this.solicitudesService.actualizarSolicitud( this.solicitud )
    //     .subscribe( solicitud => this.mostrarSnakbar('Registro actualizado'));

    // } else {
    //   // NOTE: Crear API
    //   console.log("solicitud", this.solicitud);
    //   console.log("sendSolicitud", this.sendSolicitud);

    //   this.solicitudesService.agregarSolicitud( this.solicitud )
    //     .subscribe( solicitud => {
    //       this.router.navigate(['/home/editar', solicitud.id ]);
    //       this.mostrarSnakbar('Registro creado');
    //     })
    // }

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

          console.log('BOTON BORRAR');
          this.activatedRoute.params
          .pipe(
            switchMap( ({id}) => this.solicitudesService.borrarSolicitud( id ) )
            )
            .subscribe((resp) => {
              console.log('Eliminado');
              this.router.navigate(['/home']);
            });

          // this.solicitudesService.borrarSolicitud( this.solicitud.id! )
          //   .subscribe( resp => {
          //     this.router.navigate(['/home']);
          //   });
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
