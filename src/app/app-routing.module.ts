import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { RegisterComponent } from './core/components/register/register.component';
import { LoginComponent } from './core/components/login/login.component';
import { CharacterModule } from './features/character/character.module';
import { CharacterComponent } from './features/character/character/character.component';
import { isLoggedGuard } from './shared/guards/is-logged.guard';
import { ChantierComponent } from './core/pages/chantier/chantier.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path: 'character',component:CharacterComponent 
  ,loadChildren: () => import('./features/character/character.module').then(m => m.CharacterModule)
  ,canActivate:[isLoggedGuard]},
  {path:"chantier",component:ChantierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
