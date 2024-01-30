import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '../../service/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDTO } from '../../DTO/character-dto';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  character! : CharacterDTO

  constructor(
    private readonly _characterService: CharacterService,
    private readonly _router: Router,
    private readonly _ar: ActivatedRoute,
  ){ }
  
  
  ngOnInit(): void {
    let characterId = this._ar.snapshot.params['id'];
    this._characterService.getDetail(characterId).subscribe({
      next: (data : CharacterDTO) => {
        this.character = data;
      }
    })
  }

deleteOnclick(): void{
 let characterId = this._ar.snapshot.params['id'];
   this._characterService.delete(characterId) }
}

