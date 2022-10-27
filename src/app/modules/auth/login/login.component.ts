import {Component} from '@angular/core';
import {getWindow, isDesktop} from "../../../app.component";
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Md5} from "md5-typescript";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isDesktopRef = isDesktop;
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar,
              private router: Router) {
    if (authService.isLoggedIn()) {
      router.navigate(['landing']);
    }
  }

  public login(event: any) {
    event.preventDefault();
    this.authService.authenticate(String(this.emailFormControl.value), String(Md5.init(this.passwordFormControl.value)))
      .subscribe(() => {
        localStorage?.setItem('isLogin', 'true');
        if (getWindow()) {
          // @ts-ignore
          getWindow().location.href = '/';
        }
      }, (error) => {
        this._snackBar.open(String(error.errorMessage))._dismissAfter(5000);
      });
  }
}
