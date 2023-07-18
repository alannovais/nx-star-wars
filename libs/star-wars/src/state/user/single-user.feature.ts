import { createFeature, createReducer, on, createSelector } from '@ngrx/store';
import { UserAcations } from './user.action';
import { User } from '../../interfaces/user/user.interface';

export const userInitialState: User = {
  id: 0,
  name: '',
  login: '',
  password: '',
  actived: false,
};

export const SingleUserFeature = createFeature({
  name: 'singleUser',
  reducer: createReducer(
    userInitialState,
    on(UserAcations.getUserActived, (state, user: User): User => {
      console.log("here", state, user);
      return {
        ...state,
        ...user,
      };
    })
  ),
});

export const UserViewModel = createSelector({
  user: SingleUserFeature.selectSingleUserState,
});
