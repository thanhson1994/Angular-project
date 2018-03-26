import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';
import { HostListener, Inject } from '@angular/core';

declare const window: any;


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  active;
  constructor(public dialog: MatDialog) {}


    openDialog(): void {
      const dialogRef = this.dialog.open(LoginFormComponent, {
        width: '650px',
        height: '400px',

      });

      dialogRef.afterClosed().subscribe(result => {
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
