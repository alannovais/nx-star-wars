import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map, take } from 'rxjs';
import { UserAcations } from './user.action';
import { UserListFeature } from './user.feature';
import { User } from '../../interfaces/user/user.interface';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private router: Router
  ) {}

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAcations.userLoginSystem),
      take(1),
      map((action) => {
        let arrayUsers: User[] = [];
        let updateUser: User[] = [];
        this.store$
          .select(UserListFeature.selectUserListState)
          .subscribe((e) => (arrayUsers = e.map((f) => f)));
        const deepCopy = JSON.parse(JSON.stringify(arrayUsers));
        deepCopy.forEach((result: any) => {
          if (
            result.login === action.login &&
            result.password === action.password
          ) {
            result.actived = true;
          }
          updateUser.push(result);
        });
        console.log(updateUser);
        this.store$.dispatch(UserAcations.loginSuccess(updateUser));
        this.router.navigate(['/persons']);
        return action;
      })
    )
  );
}
