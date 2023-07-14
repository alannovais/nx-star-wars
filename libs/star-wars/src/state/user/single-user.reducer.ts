import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user/user.interface';
import { loginUser } from './user.action';

export const initialState: User = {
  id: 0,
  name: '',
  login: '',
  password: '',
  actived: false,
};

export const userReducer = createReducer(
  initialState,
  on(loginUser, (state, user: User): User => {
    return state;
  })
);
