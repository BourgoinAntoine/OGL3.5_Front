import { GenderEnum } from "../enums/gender-enum";
import { UserDTO } from "../../../core/models/user/user-dto";
import { Racedto } from "src/app/core/models/race/racedto";
import { ProfilDTO } from "src/app/core/models/profil/profil-dto";

export interface CharacterDTO {
    
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
    
    maximun_life: number;
    
    current_life: number;
    
    initiative: number;
    
    skill_point: number;
    
    defence: number;
   
    pp: number;
   
    po: number;
   
    pa: number;
    
    pc: number;
    
    point_chance: number;
    
    point_repos: number;
    
    //    Race race,
    raceId : Racedto

    
    userId : UserDTO

    //    Profils profils
    profilId: ProfilDTO

}
