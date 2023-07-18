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
  {
    id: 2,
    name: 'Avany',
    login: 'any',
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

    on(UserAcations.userLoginSystem, (state): User[] => {
      return state.map((data) => {
        return { ...data, actived: false };
      });
    }),

    on(UserAcations.loginSuccess, (state, { user }): User[] => user),

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
  }),
});

function filterUserFunction(value: User[]): any {
  let nameUser = '';
  value.find((data: User) => {
    if (data.actived === true) nameUser = data.name;
  });
  return nameUser;
}

export const ListUserViewModel = createSelector({
  listUser: UserListFeature.selectUserListState,
  logged: UserListFeature.nameUserLoged,
});
