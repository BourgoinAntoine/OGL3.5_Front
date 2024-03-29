import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './pages/detail/detail.component';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [
    CreateComponent,
    DetailComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ]
})
export class CharacterModule { }
