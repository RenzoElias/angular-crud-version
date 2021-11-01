import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SolicitudesService } from '../../services/solicitudes.service';
import { ListSolicitudes } from '../../interfaces/solicitudes.interface';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class SolicitudComponent implements OnInit {

  solicitud!: ListSolicitudes;

  constructor( private activatedRoute: ActivatedRoute,
               private solicitudesService: SolicitudesService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.solicitudesService.getSolicitudPorId(id) )
      )
      .subscribe((data: any) => {
        const {result} = data;
        this.solicitud = result[0];
      });

      // .subscribe( solicitud => this.solicitud = solicitud );
  }

  regresar() {
    this.router.navigate(['/home/listado']);
  }

}
