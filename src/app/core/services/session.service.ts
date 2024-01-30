import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserTokenDTO } from '../models/user/user-token-dto';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _currentUser$!: BehaviorSubject<UserTokenDTO | undefined>;

  constructor() {
     let json = localStorage.getItem("currentUser");

    this._currentUser$ = new BehaviorSubject<UserTokenDTO | undefined>(json ? JSON.parse(json) : undefined);
  }
  
  get currentUser(){
    return this._currentUser$.value;
  }

  get currentUser$(){
    return this._currentUser$.asObservable();
  }

  start(dto: UserTokenDTO): void {
    this._currentUser$.next(dto);
    localStorage.setItem("currentUser", JSON.stringify(dto));
  }

  stop(): void {
    this._currentUser$.next(undefined);
    localStorage.removeItem("currentUser");
  }
}
