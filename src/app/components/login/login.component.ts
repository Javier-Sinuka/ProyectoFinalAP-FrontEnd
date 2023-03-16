import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {FormBuilder, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {Credentials} from "../../model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginUsuario: FormGroup;

  creds: Credentials = {
    email: '',
    password: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;

    this.creds.email = email;
    this.creds.password = password;

    this.apiService.login(this.creds)
        .subscribe(response => {
          this.router.navigate(['/home'])
        })
  }

  ngOnInit(): void {
    if (this.apiService.verifyLogged()){
      this.router.navigate(['/home'])
    }
  }
}
