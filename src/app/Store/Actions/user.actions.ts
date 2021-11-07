import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/Model/user';

export const get_user = '[User] Get User';
export const get_user_success = '[User] Get User success';
export const add_user = '[User] Add User';
export const add_movie_success = '[User] Add movie success';

export const getUser = createAction(get_user);
export const getUsersSuccess = createAction(
  get_user_success,
  (users: User[]) => ({ users })
);
export const addUser = createAction(add_user, (user: User) => ({
  user,
}));

export const addUserSuccess = createAction(add_movie_success, (user: User) => ({
  user,
}));
