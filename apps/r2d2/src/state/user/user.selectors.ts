import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../../interfaces/user/user.interface';


export const listUser = createSelector(
  createFeatureSelector('root'),
  (state: User[]) => {
    console.log("aqui", state);
    return state;
  }
);


