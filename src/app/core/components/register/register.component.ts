import { Component } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerFormGroup! : FormGroup;


  constructor(
    private readonly _authentificationService : AuthentificationService,
    private readonly _formBuilder : FormBuilder,
    private readonly _router : Router,
  ){
    this.registerFormGroup = this._formBuilder.group({
      username : [null,[Validators.required,Validators.maxLength(50)]],
      email : [null,[Validators.required, Validators.maxLength(150), Validators.email]],
      password : [null,[Validators.required]]
      
    });
  }

  onSubmit () :void{

    
    if(!this.registerFormGroup.valid){
      return ;
    }
    
    this._authentificationService.register(this.registerFormGroup.value).subscribe({
      next: (userTokenDTO) => {
        this._router.navigate(["/character"]);
        //message de confirmation
      } , 
      error: (error)=>{
        console.log(error);        
        //gerer les erreurs
      }
    });
  }
}
