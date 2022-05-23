import { Injectable } from '@angular/core';
import { getUsers } from '../data/users';
import { User } from '../interfaces/app';
import { CrudService } from './crud.service';
import { ServerCrudService } from './server-crud.service';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User> {

  constructor() {
    super();
    this.data = getUsers();
  }

  refresh() : User[] {
    this.data = getUsers();
    return this.data;
  }

}


