import {
  addUser,
  addUserSuccess,
  getUser,
  getUsersSuccess,
} from '../Actions/user.actions';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { DataService } from 'src/app/Service/data.service';

@Injectable()
export class UserEffects {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUser),
      exhaustMap(() =>
        this.dataService.getUsers().pipe(
          map((users) => getUsersSuccess(users)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(addUser),
      tap((user) => console.log(user)),
      concatMap(({ user }) =>
        this.dataService.addUsers(user).pipe(
          concatMap((newUser) => {
            return [addUserSuccess(newUser), getUser()];
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
