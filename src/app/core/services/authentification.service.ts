import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../models/user/register-form';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserTokenDTO } from '../models/user/user-token-dto';
import { environment } from 'src/environments/environment.development';
import { LoginForm } from '../models/user/login-form';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private _currentUser! : BehaviorSubject<UserTokenDTO | undefined>;

  constructor(
    private readonly _http: HttpClient
  ) { 
    let potencialUser = localStorage.getItem('currentUser');
    this._currentUser = new BehaviorSubject<UserTokenDTO | undefined>(potencialUser ? JSON.parse(potencialUser) : undefined);
  }

  get currentUser(): UserTokenDTO | undefined{
    return this._currentUser.value;
  } 

  get currentUser$(): Observable<UserTokenDTO|undefined>{
    return this._currentUser.asObservable();
  }

  register (registerForm : RegisterForm): Observable<UserTokenDTO>{
    return this._http.post<UserTokenDTO>(environment.apiUrl+'/user/register', registerForm).pipe(
      tap((data)=>{
        this._currentUser.next(data);
        localStorage.setItem('currentUser',JSON.stringify(data));
      })
    );
  }
  login (loginForm : LoginForm): Observable<UserTokenDTO>{
    return this._http.post<UserTokenDTO>(environment.apiUrl+'/user/login', loginForm).pipe(
      tap((data)=>{
        this._currentUser.next(data);
        localStorage.setItem('currentUser',JSON.stringify(data));
      })
    );
  }
  
  logout(): void{
    this._currentUser.next(undefined);
    localStorage.removeItem('currentUser');
  }

}
