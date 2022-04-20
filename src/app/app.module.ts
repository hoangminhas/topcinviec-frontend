import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { MasterComponent } from './layouts/master/master.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { JobListComponent } from './components/jobs/job-list/job-list.component';
import { JobDetailComponent } from './components/jobs/job-detail/job-detail.component';
import { RecruiterDetailComponent } from './components/recruiters/recruiter-detail/recruiter-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    JobListComponent,
    JobDetailComponent,
    RecruiterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
