import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../Reducers/user.reducers';

export interface UserState {
  users: fromUser.UserState;
}

export const getUserState = createFeatureSelector<UserState>('users');

export const selectUserList = createSelector(
  getUserState,
  (state: UserState) => state.users
);
