import { Component } from '@angular/core';
import { UserTokenDTO } from 'src/app/core/models/user/user-token-dto';
import { Link } from './models/link.models';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { UserRoleEnum } from 'src/app/core/models/enums/user-role-enum';

const anonymousNav: Link[] = [
  {title: "Register",url: "/register"},
  {title: "Login", url:"/login"}
];

const userNav: Link[] =[];


const adminNav: Link[] =[];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  nav! : Link[];
  currentUser! : UserTokenDTO|undefined;


  constructor(
    private readonly _authService: AuthentificationService
  ){
    this._authService.currentUser$.subscribe(
      (data)=> {
        this.currentUser =data;
        this.nav = this.currentUser ? (this.currentUser.user.role == UserRoleEnum.ADMIN? adminNav : userNav) : anonymousNav;
      } )
  }

  logout(): void{
    this._authService.logout();
  }
}
