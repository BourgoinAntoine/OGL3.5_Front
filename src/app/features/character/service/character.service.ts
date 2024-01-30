import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterCreateForm } from '../Form/character-create-form';
import { Observable } from 'rxjs';
import { CharacterDTO } from '../DTO/character-dto';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private readonly _http: HttpClient
  ) { 

  }

  create(form : CharacterCreateForm): Observable<CharacterDTO>{
    return this._http.post<CharacterDTO>(environment.apiUrlCharacter+'/create',form);
  }

  update(id: number, form: CharacterCreateForm):Observable<CharacterDTO>{
    return this._http.put<CharacterDTO>(environment.apiUrlCharacter+"/update/"+id,form);
  }

  delete(id : number){
    this._http.delete(environment.apiUrlCharacter+"/delete/"+id)
  }

  getDetail(id:number):Observable<CharacterDTO>{
    return this._http.get<CharacterDTO>(environment.apiUrlCharacter+"/detail"+id);
  }
}
