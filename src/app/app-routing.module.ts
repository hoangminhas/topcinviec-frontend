import { JobDetailComponent } from './components/jobs/job-detail/job-detail.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MasterComponent} from './layouts/master/master.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {JobListComponent} from './components/jobs/job-list/job-list.component';


const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    // children: [
    //   {
    //     path: 'jobs-list',
    //     component: JobListComponent
    //   },
    // ]
  },
  {
    path: 'jobs',
    component: JobListComponent
  },
  {
    path: 'jobs/:id/job-detail',
    component: JobDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
