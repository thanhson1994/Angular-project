import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
// import {} from '';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImportModule} from './import/import.module';
import { BestProjectComponent } from './best-project/best-project.component';
import { LoginComponent } from './login/login.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {LoginSuccesComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    LoginFormComponent,
    BestProjectComponent,
    LoginComponent,
    RegisterFormComponent,
    LoginSuccesComponent
  ],
  entryComponents: [ LoginFormComponent, RegisterFormComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ImportModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
