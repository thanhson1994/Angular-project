import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
return (users.includes(c.value)) ? {
 invalidusername : true
} : null ;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
    username: ['', [Validators.required, forbiddenUsername(['admin', 'manager']) ]],
    password: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.formLogin);
    this.formLogin.reset();
  }

}
