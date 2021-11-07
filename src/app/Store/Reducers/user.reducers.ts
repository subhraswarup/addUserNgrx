import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/Model/user';
import { addUserSuccess, getUsersSuccess } from '../Actions/user.actions';

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: null,
};

export const userReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, { users }) => {
    return {
      ...state,
      users,
    };
  }),
  on(addUserSuccess, (state, { user }) => {
    return {
      ...state,
      user: user,
    };
  })
);
