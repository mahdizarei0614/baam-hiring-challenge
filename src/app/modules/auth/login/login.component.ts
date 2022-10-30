import {Component, OnInit} from '@angular/core';
import {isDesktop} from "../../../app.component";
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Md5} from "md5-typescript";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {IUserModel, UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isDesktopRef = isDesktop;
  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  public passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService,
              private _snackBar: MatSnackBar,
              private userService: UserService,
              private router: Router) {
  }

  public ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['', 'marvel']);
    }
  }

  public login(event: any) {
    event.preventDefault();
    this.authService.authenticate(String(this.emailFormControl.value), String(Md5.init(this.passwordFormControl.value)))
      .subscribe((res) => {
        this.userService.setUser(res.user as IUserModel);
        localStorage?.setItem('isLogin', 'true');
        this.router.navigate(['']);
      }, (error) => {
        this._snackBar.open(String(error.errorMessage))._dismissAfter(5000);
      });
  }
}
