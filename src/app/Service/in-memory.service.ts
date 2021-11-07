import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}

  createDb() {
    return {
      users: this.mockUsers(),
    };
  }
  private mockUsers(): User[] {
    const user: User = {
      name: 'subhra',
      age: 18,
    };
    user.id = 1;

    const users = [user];
    return users;
  }
}
