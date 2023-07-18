import { UserAcations } from './user.action';
import { createFeature, createReducer, on, createSelector } from '@ngrx/store';
import { User } from '../../interfaces/user/user.interface';

export const initialState: User[] = [
  {
    id: 1,
    name: 'Alan',
    login: 'anovais',
    password: '123',
    actived: false,
  },
];

export const UserListFeature = createFeature({
  name: 'userList',
  reducer: createReducer(
    initialState,

    on(UserAcations.createUserForSystem, (state, user: User): User[] => {
      return [...state, user];
    }),

    on(UserAcations.userLoginSystem, (state, user: User): User[] => {
      return state.map((data) => {
        if (data.login === user.login && data.password === user.password) {
          return { ...data, actived: true };
        }
        return data;
      });
    }),

    on(UserAcations.userLogedSystem, (state, user: User): User[] => {
      return state.map((data) => {
        if (data.login === user.login && data.password === user.password) {
          return { ...data, actived: false };
        }
        return data;
      });
    })
  ),
  extraSelectors: ({ selectUserListState }) => ({
    nameUserLoged: createSelector(selectUserListState, filterUserFunction),
    nameTeste: createSelector(selectUserListState, testeFilterUserFunction),
  }),
});

function filterUserFunction(value: User[]): User[] {
  return value.filter((data: User) => {
    if (data.actived === true) return data;
    else return { ...initialState, name: '' };
  });
}

function testeFilterUserFunction(value: User[]): any {
  let nameUser = '';
  value.find((data: User) => {
    if (data.actived === true) nameUser = data.name;
  });
  return nameUser;
}

export const ListUserViewModel = createSelector({
  listUser: UserListFeature.selectUserListState,
  loged: UserListFeature.nameUserLoged,
  teste: UserListFeature.nameTeste,
});
