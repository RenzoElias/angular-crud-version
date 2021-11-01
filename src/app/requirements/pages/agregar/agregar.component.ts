import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SendCrearRequirement, ReqTipoRequirement, UserRequirement, ListRequirements } from '../../interfaces/requirements.interface';
import { RequirementsService } from '../../services/requirements.service';

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

    this.requirementsService.agregarRequirement( this.sendCrearRequirement )
      .subscribe( resp => {
        this.router.navigate(['/home']);
        this.mostrarSnakbar('Agregado Correctamente');
      })

  }

  mostrarSnakbar( mensaje: string ) {

    this.snackBar.open( mensaje, 'OK!', {
      duration: 2500
    });

  }

}
