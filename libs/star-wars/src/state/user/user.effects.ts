import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map } from 'rxjs';
import { UserAcations } from './user.action';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private store$: Store) {}

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAcations.userLoginSystem),
      take(1),
      map((action) => {
        console.log(action);
        return action;
      })
      //check out again effects suppliers-list.effects.ts
    )
  );
}
