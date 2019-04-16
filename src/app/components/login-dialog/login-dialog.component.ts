
import { MatDialogRef, MAT_DIALOG_DATA, MatButton } from '@angular/material';
import { Component, OnInit, Inject, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  @ViewChild('loginBtn') loginBtn: MatButton;

  constructor(public dialogRef:MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    //console.log("ngAfterViewInit");
  }

  onKeyPress(event){
    if(event.key === "Enter"){
      this.dialogRef.close(this.data);
    }
  }

  onCancelClick():void {
    this.dialogRef.close(this.data);
  }
}
