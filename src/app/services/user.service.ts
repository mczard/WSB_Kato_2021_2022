import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: User | undefined;

  get isLoggedIn(): boolean {
    return !!this._user;
  }

  get salutation(): string {
    return this._user ? `Mr ${this._user?.userName}` : '';
  }

  constructor() {
    const userString = localStorage.getItem('user');

    if (userString) {
      this._user = JSON.parse(userString);
    }
  }

  logIn(userName: string, password: string): true | string {
    if (userName === 'userName' && password === 'password') {

      this._user = {
        userName: 'Mateusz',
        role: 'Admin'
      };

      localStorage.setItem('user', JSON.stringify(this._user));

      return true;
    }

    return 'Podano błędne dane do logowania';
  }

  logOut() {
    this._user = undefined;
    localStorage.removeItem('user');
  }
}
