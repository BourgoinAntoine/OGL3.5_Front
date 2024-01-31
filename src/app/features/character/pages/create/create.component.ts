import { Component } from '@angular/core';
import { CharacterService } from '../../service/character.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  characterForm!: FormGroup;
  races: string[] = ['Troll','Elfe','...'];

  constructor(
    private readonly _characterService: CharacterService,
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
  ){
    this.characterForm = _fb.group({
    player_name : [null,Validators.maxLength(150)],
 
    firstname : [null,[Validators.required,Validators.maxLength(50)]],

    lastname: [null,Validators.maxLength(150)],

    gender: [null],
 
    age: [null,Validators.required],
  
    height: [null,Validators.required],
 
    weight: [null,Validators.required],

    level: [1,[Validators.required,Validators.max(25),Validators.min(1)]],
   
    force: [null,[Validators.required,Validators.max(25),Validators.min(1)]],
  
    intelligence:[null,[Validators.required,Validators.max(25),Validators.min(1)]],
 
    dexterity: [null,[Validators.required,Validators.max(25),Validators.min(1)]],
  
    constitution: [null,[Validators.required,Validators.max(25),Validators.min(1)]],
   
    sagesse: [null,[Validators.required,Validators.max(25),Validators.min(1)]],
   
    charisma: [null,[Validators.required,Validators.max(25),Validators.min(1)]],

    raceId:[null],

    // profilId :[null]
      
    });

  }

  onSubmit():void{
    console.log(this.characterForm.value);
    
    if (!this.characterForm.valid) {
      return;
      
    }
    this._characterService.create(this.characterForm.value).subscribe({
      next:(characterDTO) => {
        this._router.navigate(["/character"]);
      },
      error:(error) =>{
        console.log(error)
      }
    
    })
  }
}
