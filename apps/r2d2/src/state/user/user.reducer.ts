import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user/user.interface';
import { createUser, loginUser, logoffUser } from './user.action';

export const initialState: User[] = [];

export const userReducer = createReducer(
  initialState,

  on(createUser, (state, user: User) => {
    return [...state, user];
  }),

  on(loginUser, (state, user: User): User[] => {
    const array: User[] = [];
    state.forEach((data) => {
      if (user.id === data.id) {
        array.push(user);
      } else {
        array.push(data);
      }
    });
    return array;
  }),

  on(logoffUser, (state, user: User): User[] => {
    const array: User[] = [];
    state.forEach((data) => {
      if (user.id === data.id) {
        array.push(user);
      } else {
        array.push(data);
      }
    });
    return array;
  })
);
