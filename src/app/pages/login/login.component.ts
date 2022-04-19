import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorLogin: string;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['']
    }, {
      validators: Validators.required
    });
  }

  submit() {
    const data = this.loginForm.value;
    this.authService.login(data).subscribe(res => {
      if (res.status === true) {
        const userLogin = res.data;
        localStorage.setItem('userLogin', JSON.stringify(userLogin));
        this.router.navigate(['']);
      } else {
          this.errorLogin = res.msg;
      }
    });
  }

}
