import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserRequirement } from '../../interfaces/requirements.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: UserRequirement ) { }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close(true);
  }

  exit(){
    this.dialogRef.close();
  }

}
