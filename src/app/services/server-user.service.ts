import { Injectable } from '@angular/core';
import { getUsers } from '../data/users';
import { User } from '../interfaces/app';
import { CrudService } from './crud.service';
import { ServerCrudService } from './server-crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerUserService extends ServerCrudService<User> {
  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.BASE_URL}/users`);
  }

  refresh(): User[] {
    return [];
  }
}
