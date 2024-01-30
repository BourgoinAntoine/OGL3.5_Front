import { GenderEnum } from "../enums/gender-enum";
import { UserDTO } from "../../../core/models/user/user-dto";
import { Racedto } from "src/app/core/models/race/racedto";
import { ProfilDTO } from "src/app/core/models/profil/profil-dto";

export interface CharacterCreateForm {
    player_name : string;
 
    firstname : string;

    lastname: string;

    gender: GenderEnum;
 
    age: number;
  
    height: number;
 
    weight: number;

    level: number;
   
    force: number;
  
    intelligence: number;
 
    dexterity: number;
  
    constitution: number;
   
    sagesse: number;
   
    charisma: number;
    
    //    Long raceId,
    raceId : Racedto

    //    Profils profils
    profilId : ProfilDTO
}
