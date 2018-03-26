import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
// import {} from '';
import { AppComponent } from './app.component';
import { MinComponent } from './min/min.component';
import { ProjectComponent } from './project/project.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImportModule} from './import/import.module';
import { BestProjectComponent } from './best-project/best-project.component';

@NgModule({
  declarations: [
    AppComponent,
    MinComponent,
    ProjectComponent,
    LoginFormComponent,
    BestProjectComponent
  ],
  entryComponents: [ LoginFormComponent ],
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
