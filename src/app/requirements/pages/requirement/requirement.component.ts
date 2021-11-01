import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { RequirementsService } from '../../services/requirements.service';
import { ListRequirements } from '../../interfaces/requirements.interface';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {

  requirement!: ListRequirements;

  constructor( private activatedRoute: ActivatedRoute,
               private requirementsService: RequirementsService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.requirementsService.getRequirementPorId(id) )
      )
      .subscribe((data: any) => {
        const {result} = data;
        this.requirement = result[0];
      });
  }

  regresar() {
    this.router.navigate(['/home/listado']);
  }

}
