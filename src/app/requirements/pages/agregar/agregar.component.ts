import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SendCrearRequirement, ResponseI, ReqTipoRequirement, UserRequirement, ListRequirements } from '../../interfaces/requirements.interface';
import { RequirementsService } from '../../services/requirements.service';
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


  sendCrearRequirement: SendCrearRequirement = {
    descripcion: '',
    idUsuarioSolicitante: 3,
    id003AreaSolicitante: 8,
    id005TipoRequirement: 18,
  }

  userRequirement!: UserRequirement;
  reqTipoRequirements: ReqTipoRequirement[] = [];

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

    this.requirementsService.getUserRequirementPorId(3)
      .subscribe((data: any) => {
        const {result} = data;
        console.log();

        this.userRequirement = result;
      });

  }

  save() {

    console.warn("sendCrearRequirement", this.sendCrearRequirement);


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

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'OK!', {
      duration: 2500
    });

  }

}
