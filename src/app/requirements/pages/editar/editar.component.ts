import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { SendEditarRequirement, ReqTipoRequirement, ListRequirements } from '../../interfaces/requirements.interface';
import { RequirementsService } from '../../services/requirements.service';
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

  requirement!: ListRequirements;
  reqTipoRequirements: ReqTipoRequirement[] = [];


  sendEditarRequirement: SendEditarRequirement = {
    descripcion: '',
    idUsuarioSolicitante: 3,
    id003AreaSolicitante: 8,
    id005TipoRequirement: 18,
  }


  constructor( private requirementsService: RequirementsService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackBar: MatSnackBar,
               public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.requirementsService.getAllTipoRequirement()
      .subscribe((data: any) => {
        const {result} = data;
        this.reqTipoRequirements = result;
      });

    if( !this.router.url.includes('editar') ) {
      return;
    }


    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.requirementsService.getRequirementPorId( id ) )
      )
      .subscribe((data: any) => {
        const {result} = data;
        console.warn('result',result[0]);

        this.requirement = result[0];
      });
  }

  save() {

      this.requirementsService.actualizarRequirement( this.sendEditarRequirement )
        .subscribe( resp => this.mostrarSnakbar('Editado correctamente'));

  }

  borrarRequirement() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.requirement
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {

          this.activatedRoute.params
          .pipe(
            switchMap( ({id}) => this.requirementsService.borrarRequirement( id ) )
            )
            .subscribe((resp) => {
              console.log('Eliminado');
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
