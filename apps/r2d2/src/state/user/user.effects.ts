import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { map } from 'rxjs';
import { loginUser } from './user.action';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      take(2),
      map((action) => {
        console.log(action);
        return action;
      })
    )
  );
}
