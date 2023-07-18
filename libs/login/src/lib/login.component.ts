import { UserListFeature } from '@force-app/star-wars';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '@force-app/star-wars';
import { UserAcations } from '@force-app/star-wars';

@Component({
  selector: 'force-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginGroup = new FormGroup({
    login: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null),
  });

  constructor(private store: Store, private router: Router) {
    this.loginGroup.patchValue({
      login: '',
      password: '',
    });
  }

  signIn() {
    const userActive: User = {
      id: 0,
      name: '',
      login:
        this.loginGroup.value.login === undefined ||
        this.loginGroup.value.login === null
          ? ''
          : this.loginGroup.value.login,
      password:
        this.loginGroup.value.password === null ||
        this.loginGroup.value.password === undefined
          ? ''
          : this.loginGroup.value.password,
      actived: false,
    };
    this.store.dispatch(UserAcations.userLoginSystem(userActive));
  }
}
