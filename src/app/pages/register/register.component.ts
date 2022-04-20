import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorRegister: any[] = [];
  registerForm: FormGroup;
  submitted = false;
  roleId = 2;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role_id: [this.roleId],
      phone: ['', Validators.required]
    });
  }

  get fval() {
    return this.registerForm.controls;
  }

  setRole(role) {
    this.roleId = role;
  }
  submitRegister() {
    this.registerForm.patchValue({
      role_id: this.roleId
    });
    const data = this.registerForm.value;

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(data).subscribe(res => {
      if (res.success) {
        alert('Register successful');
        this.router.navigate(['login']);
      }
    });
  }

}
