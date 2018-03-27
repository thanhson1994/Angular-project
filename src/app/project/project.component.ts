import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { HostListener, Inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


declare const window: any;


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  active;
  contactForm: FormGroup;
  constructor(public dialog: MatDialog,
    private fb: FormBuilder) { }

  ngOnInit() {
   this.contactForm = this.fb.group({
    yourname: ['', [Validators.required, ] ],
    youremail: ['', [ Validators.required, Validators.email] ],
    yourtitle: ['', [Validators.required, Validators.minLength(20)] ],
    yourcomment: ['', Validators.required]
   });
  }
  onSubmit() { }


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







  @HostListener('window:scroll', [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 60) {
      this.active = false;
    } else if (number > 200) {
      this.active = true;
    }

  }

}
