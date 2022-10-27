import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData: IUserModel;

  constructor() {
    if (localStorage?.getItem('user')) {
      this.userData = JSON.parse(String(localStorage?.getItem('user'))) as IUserModel;
    }
  }

  public setUser(user: IUserModel) {
    localStorage?.setItem('user', JSON.stringify(user));
    this.userData = user;
  }

  public get get() {
    return this.userData;
  }
}

export interface IUserModel {
  name: string,
  email: string,
  age: number
}
