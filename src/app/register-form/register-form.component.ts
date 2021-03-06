import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
return (users.includes(c.value)) ? {
 invalidusername : true
} : null ;
  };
}
export function comparePassword(c: AbstractControl) {
  const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
      passwordnotmatch: true
    };
}



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  formRegister: FormGroup;
  constructor(private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<RegisterFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  isSpecial: boolean;

  ngOnInit() {
    this.formRegister = this.fb.group({
      username: ['', [Validators.required, Validators.email , forbiddenUsername(['admin', 'manager'])]],
      pw: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]]  ,
        confirmPassword: ['', Validators.required ]
      }, {
        validator: comparePassword
      })
    });
  }
  onSubmit() {
    // if (this.formRegister.value.password === this.formRegister.value.confirmPassword) {
    //   this.isSpecial = true;
    //   // this.isSpecial = !this.isSpecial;
    // console.log(this.formRegister);
    // }
this.formRegister.reset();
this.dialogRef.close();

  }

}
