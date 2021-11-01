import { Component, OnInit } from '@angular/core';
import { RequirementsService } from '../../services/requirements.service';
import { UserRequirement, ListRequirements } from '../../interfaces/requirements.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  //TODO: INTERFACE QUE RECIBIRA DEL BACK
  requirements: ListRequirements[] = [];

  // userRequirement!: UserRequirement;

  constructor( private requirementsService: RequirementsService ) { }

  ngOnInit(): void {

    this.requirementsService.getAllRequirement()
      .subscribe((data: any) => {
        const {result} = data;
        this.requirements = result;
      });

    // this.requirementsService.getUserRequirementPorId(1)
    // .subscribe((data: any) => {
    //   const {result} = data;
    //   this.userRequirement = result;
    // });

  }

}
