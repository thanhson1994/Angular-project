import { Component, OnInit, style, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return (users.includes(c.value)) ? {
      invalidusername: true
    } : null;
  };
}
// export function comparePassword(c: AbstractControl) {
//   const v = c.value;
//     return (v.password === v.confirmPassword) ? null : {
//       passwordnotmatch: true
//     };
// }

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {


  users = [{ email: 'abc@abc', password: 'abc123456' }];

  form: FormGroup;
  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  isSpecial: boolean;

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email, forbiddenUsername(['admin', 'manager', 'Admin', 'ADMIN', 'MANAGER'])]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  onSubmit() {
    if (this.form.value.password === this.form.value.confirmPassword) {
      this.isSpecial = true;
      // this.isSpecial = !this.isSpecial;
      console.log(this.form);
    }

  }

  onSuccess(): void {

    this.dialogRef.close();

    const dialogRef = this.dialog.open(LoginSuccesComponent, {
      width: '400px',
      height: '200px',

    });


  }


}

@Component({
  selector: 'app-login-succes',
  template: '<h2>Login Successfully</h2>',


})
export class LoginSuccesComponent {
  public dialogRef: MatDialogRef<LoginSuccesComponent>;
  @Inject(MAT_DIALOG_DATA) public data: any;

}

