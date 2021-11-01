import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { SendEditarRequirement, ResponseI, ReqTipoRequirement, UserRequirement, ListRequirements } from '../../interfaces/requirements.interface';
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
  // sendRequirement: SendRequirement = {
  //   area: '',
  //   area_cargo: '',
  //   area_destino: '',
  //   nombre: '',
  //   tipo: 20,
  //   descripcion: '',
  // }


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

    // if( this.requirement.area.trim().length === 0  ) {
    //   return;
    // }

    // if ( this.requirement.id ) {
    //   // NOTE: Actualizar Editar API
    //   console.log("requirement", this.requirement);
    //   console.log("sendRequirement", this.sendRequirement);

    //   this.requirementsService.actualizarRequirement( this.requirement )
    //     .subscribe( requirement => this.mostrarSnakbar('Registro actualizado'));

    // } else {
    //   // NOTE: Crear API
    //   console.log("requirement", this.requirement);
    //   console.log("sendRequirement", this.sendRequirement);

    //   this.requirementsService.agregarRequirement( this.requirement )
    //     .subscribe( requirement => {
    //       this.router.navigate(['/home/editar', requirement.id ]);
    //       this.mostrarSnakbar('Registro creado');
    //     })
    // }

  }

  borrarRequirement() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.requirement
    });

    dialog.afterClosed().subscribe(
      (result) => {
        // Si presionas opcion borrar del dialog, el result ( Sera "true" )
        // BORRAR API
        if( result ) {

          this.activatedRoute.params
          .pipe(
            switchMap( ({id}) => this.requirementsService.borrarRequirement( id ) )
            )
            .subscribe((resp) => {
              console.log('Eliminado');
              this.router.navigate(['/home']);
            });

          // this.requirementsService.borrarRequirement( this.requirement.id! )
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
