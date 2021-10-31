import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RequerimientosService } from '../../services/requerimientos.service';
import { Requerimiento } from '../../interfaces/requerimientos.interface';

@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class RequerimientoComponent implements OnInit {

  requerimiento!: Requerimiento;

  constructor( private activatedRoute: ActivatedRoute,
               private requerimientosService: RequerimientosService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.requerimientosService.getRequerimientoPorId(id) )
      )
      .subscribe( requerimiento => this.requerimiento = requerimiento );

  }

  regresar() {
    this.router.navigate(['/inicio/listado']);
  }

}
