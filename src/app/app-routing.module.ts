import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasterComponent} from './layouts/master/master.component';
import {LoginComponent} from './pages/login/login.component';
import {LayoutComponent} from './main/layout/layout.component';
import {HomeComponent} from './main/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
