import { UserAcations } from './user.action';
import { createFeature, createReducer, on, createSelector } from '@ngrx/store';
import { User } from '../../interfaces/user/user.interface';

export interface UserState {
  users: User[];
}

const mockUsers: User[] = [
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

export const initialUserState: UserState = {
  users: mockUsers,
};

export const UserListFeature = createFeature({
  name: 'userList',
  reducer: createReducer(
    initialUserState,

    on(UserAcations.createUserForSystem, (state, user: User): UserState => {
      return { ...state, users: [...state.users, user] };
    }),

    on(UserAcations.userLoginSystem, (state): UserState => {
      return {
        ...state,
      };
    }),

    on(UserAcations.loginSuccess, (state, { users }): UserState => {
      return {
        ...state,
        users: users,
      };
    }),

    on(UserAcations.userLogedSystem, (state, { users }): UserState => {
      return {
        ...state,
        users: users,
      };
    })
  ),
  extraSelectors: ({ selectUserListState }) => ({
    nameUserLoged: createSelector(selectUserListState, filterUserFunction),
  }),
});

function filterUserFunction(value: UserState): string {
  let nameUser = '';
  value.users.find((data: User) => {
    if (data.actived === true) nameUser = data.name;
  });
  return nameUser;
}

export const ListUserViewModel = createSelector({
  listUser: UserListFeature.selectUserListState,
  logged: UserListFeature.nameUserLoged,
});
