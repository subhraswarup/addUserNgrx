import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromUsers from '../app/Store/Reducers/user.reducers';
import { User } from './Model/user';
import { addUser, getUser } from './Store/Actions/user.actions';
import { selectUserList } from './Store/Selector/user.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  user$: any;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromUsers.UserState>
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.myForm = this.fb.group({
      name: [null, Validators.required],
      age: ['', Validators.required],
    });
    this.user$ = this.store.select(selectUserList);
    this.user$.subscribe((data) => {
      console.log(data);
    });
  }
  getAllUsers() {
    this.store.dispatch(getUser());
  }
  onSubmit() {
    if (this.myForm.invalid) {
      return;
    }
    const formValue = this.myForm.getRawValue();
    const payload: User = {
      name: formValue.name,
      age: formValue.age,
    };
    this.store.dispatch(addUser(payload));
    this.myForm.reset();
  }
}
