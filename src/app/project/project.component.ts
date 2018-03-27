import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';
import { HostListener, Inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

declare const window: any;


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  active;
  constructor(public dialog: MatDialog) {}


    openLoginForm(): void {
      const dialogRef = this.dialog.open(LoginFormComponent, {
        width: '650px',
        height: '400px',

      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });

    }
    openRegisterForm(): void {
      const registerFrom = this.dialog.open(RegisterFormComponent, {
        width: '650px',
        height: ' 400px',
      });
      registerFrom.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }





  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 100) {
      this.active = false;
    } else if (number > 200) {
      this.active = true;
    }

  }

}
