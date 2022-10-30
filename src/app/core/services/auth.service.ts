import {Injectable} from '@angular/core';
import {Md5} from "md5-typescript";
import {Observable} from "rxjs";
import {IUserModel} from "../../shared/services/user.service";
import {LoadingService} from "./loading.service";
import {getWindow} from "../../app.component";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    {
      name: 'niloofar',
      email: 'niloofar@baam.sadad.co.ir',
      password: '123456',
      age: 30
    },
    {
      name: 'orkide',
      email: 'orkide@baam.sadad.co.ir',
      password: '654321',
      age: 25
    },
    {
      name: 'roz',
      email: 'roz@baam.sadad.co.ir',
      password: '1qaz',
      age: 30
    }
  ];

  constructor(private loadingService: LoadingService) {
  }

  public authenticate(email: string, password: string): Observable<AuthenticateResponseModel> {
    return new Observable<AuthenticateResponseModel>((observer) => {
      const foundUser = this.users.find((user) => user.email === email);
      if (!foundUser) {
        observer.error({
          authenticated: false,
          errorMessage: 'User Not Found.'
        });
        return;
      }
      if (Md5.init(foundUser.password) !== password) {
        observer.error({
          authenticated: false,
          errorMessage: 'Invalid Password.'
        });
        return;
      }
      observer.next({
        authenticated: true,
        user: {
          name: foundUser.name,
          email: foundUser.email,
          age: foundUser.age
        }
      });
    });
  }

  public isLoggedIn() {
    return (localStorage?.getItem('isLogin') === 'true') && localStorage?.getItem('user');
  }

  public logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('isLogin');
    this.loadingService.isLoading.next(true);
    if (getWindow()) {
      if (environment.githubDeploy) {
        window.location.href = '/baam-hiring-challenge/';
      } else {
        window.location.href = '/';
      }
    }
  }
}

export type AuthenticateResponseModel = {
  authenticated: boolean,
  errorMessage?: string,
  user?: IUserModel;
}
