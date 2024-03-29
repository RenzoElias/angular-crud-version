import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { SendCrearSolicitud, ResponseI, ReqTipoSolicitud, UserSolicitud, ListSolicitudes } from '../../interfaces/solicitudes.interface';
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


  sendCrearSolicitud: SendCrearSolicitud = {
    descripcion: '',
    idUsuarioSolicitante: 3,
    id003AreaSolicitante: 8,
    id005TipoSolicitud: 18,
  }

  userSolicitud!: UserSolicitud;
  reqTipoSolicitudes: ReqTipoSolicitud[] = [];

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

    this.solicitudesService.getUserSolicitudPorId(3)
      .subscribe((data: any) => {
        const {result} = data;
        console.log();

        this.userSolicitud = result;
      });

  }

  guardar() {

    console.warn("sendCrearSolicitud", this.sendCrearSolicitud);


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

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'OK!', {
      duration: 2500
    });

  }

}
