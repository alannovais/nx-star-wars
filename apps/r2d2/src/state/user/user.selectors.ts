import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../../interfaces/user.interface.ts/user.interface';

export const listUser = createSelector(
  createFeatureSelector('root'),
  (state: User[]) => {
    return state;
  }
);

export const userLoged = createSelector(
  createFeatureSelector('root'),
  (state: User[]) => {
    return state.find((data) => data.actived === true)?.name;
  }
);
