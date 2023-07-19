import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user/user.interface';
import { UserAcations } from './user.action';

export interface UserState {
  listUser: User[];
  selectUser: User | undefined;
}

export const initialState: User[] = [
  {
    id: 1,
    name: 'Alan',
    login: 'anovais',
    password: '123',
    actived: false,
  },
];

export const userReducer = createReducer(
  initialState,

  
);
