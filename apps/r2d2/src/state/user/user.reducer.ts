import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user.interface.ts/user.interface';
import { createUser, loginUser, logoffUser } from './user.action';

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

  on(createUser, (state, user: User) => {
    return [...state, user];
  }),

  on(loginUser, (state, user: User): User[] => {
    return state.map((data) => {
      if (data.login === user.login && data.password === user.password) {
        return { ...data, actived: true };
      }
      return data;
    });
  }),

  on(logoffUser, (state, user: User): User[] => {
    return state.map((data) => {
      if (data.login === user.login && data.password === user.password) {
        return { ...data, actived: false };
      }
      return data;
    });
  })
);
