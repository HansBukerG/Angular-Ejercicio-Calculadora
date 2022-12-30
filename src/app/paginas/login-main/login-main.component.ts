import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent implements OnInit {
  public formularioLogin:FormGroup;


  constructor(
    private readonly formBuilder:FormBuilder,
    private loginService:LoginService
  ){}

  ngOnInit(): void {
    this.formularioLogin = this.formInit();

  }

  onSubmit(formulario:FormGroup){
    if(formulario.valid)
    {
	    this.loginService.login(formulario.value.usuario,formulario.value.password);
    }
  }

  formInit():FormGroup{
    return this.formBuilder.group(
      {
        usuario: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
      }
    );
  }
}
