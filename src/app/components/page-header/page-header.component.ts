import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  
  menuItems = [
    {
      name: "My list",
      link: "mycharacters"
    },
    {
      name: "Add character",
      link: "addcharacter"
    }
  ]
  constructor(public dialog: MatDialog, public authService: AuthService, private router: Router) { }


  loginClick(){
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      autoFocus: true,
      data: {
        username: "",
        password: ""
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.authService.login(result.username, result.password);
      }
    });
  }

  logoutClick(){
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
}
