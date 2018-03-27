import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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

  form: FormGroup;
  constructor(private fb: FormBuilder) { }
  isSpecial: boolean;

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email , forbiddenUsername(['admin', 'manager'])]],
      pw: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {
        validator: comparePassword
      })
    });
  }
  onSubmit() {
    if (this.form.value.password === this.form.value.confirmPassword) {
      this.isSpecial = true;
      // this.isSpecial = !this.isSpecial;
    console.log(this.form);
    }

  }

}
