import { MatDialogRef, MAT_DIALOG_DATA, MatButton } from '@angular/material';
import { Component, Inject, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent{
  @ViewChild('loginBtn') loginBtn: MatButton;

  constructor(public dialogRef:MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onKeyPress(event){
    if(event.key === "Enter"){
      this.dialogRef.close(this.data);
    }
  }
}
