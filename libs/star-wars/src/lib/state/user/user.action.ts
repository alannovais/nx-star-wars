import { createActionGroup } from '@ngrx/store';
import { User } from '../../interfaces/user/user.interface';

export const UserAcations = createActionGroup({
  source: 'User Action Module',
  events: {
    'Create user for system': (user: User) => user,
    'User login system': (user: User) => user,
    'Login success': (users: User[]) => ({ users }),
    'User loged system': (users: User[]) => ({ users }),
    'Get user actived': (user: User) => user,
  },
});

// export const createUser = createAction('Create user for system', props<User>());

// export const loginUser = createAction(
//   'User will be accessing for the system',
//   props<User>()
// );

// export const logoffUser = createAction(
//   'User will be turn off your access for the system',
//   props<User>()
// );
