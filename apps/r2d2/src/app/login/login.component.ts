import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface.ts/user.interface';
import { loginUser } from '../../state/user/user.action';
import { FormControl, FormGroup } from '@angular/forms';
import { listUser } from '../../state/user/user.selectors';

@Component({
  selector: 'force-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = {
    id: 1,
    name: 'Alan',
    login: 'anovais',
    password: '123',
    actived: false,
  };

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
    //recupera compara atualiza
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
    this.store.dispatch(loginUser(userActive));
    this.store.select(listUser).subscribe((e: any) => {
      e.forEach((element: any) => {
        if (element.actived) {
          this.router.navigate(['/persons']);
        }
      });
    });
  }
}
