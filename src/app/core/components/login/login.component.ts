import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginFormGroup! : FormGroup;

  constructor(
    private readonly _authentificationService : AuthentificationService,
    private readonly _router : Router,
    private readonly _formBuilder : FormBuilder,
  ){
    this.loginFormGroup = this._formBuilder.group({
      email: [null,[Validators.email,Validators.required,Validators.maxLength(150)]],
      password: [null,[Validators.required]]
    })
  }

  onSubmit() :void{
    if (!this.loginFormGroup.valid) {
      return;
    }
    this._authentificationService.login(this.loginFormGroup.value).subscribe({
      next:(userTokenDTO) => {
        this._router.navigate(["/home"]);
      },
      error:(error)=>{
        console.log(error);
      }

    })
  }
  

}
