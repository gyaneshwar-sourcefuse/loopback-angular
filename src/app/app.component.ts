import { Component } from '@angular/core';
import { Role, User } from './interfaces/app';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listOfData: User[] = [];
  editRow: { [key: string]: any } = {};
  load: boolean = false;
  role = Role;

  title = 'table';

  constructor(private userService: UserService) {}

  loadData() {
    this.load = true;
    this.getData();
  }

  getData() {
    this.listOfData = this.userService.findAll();
  }

  refresh() {
    this.listOfData = this.userService.refresh();
  }

  edit(user: User) {
    this.editRow[user.id] = user;
  }

  cancel(user: User) {
    delete this.editRow[user.id];
  }

  delete(user: User) {
    this.userService.delete(user.id);
    this.getData();
  }

  save(user: User) {
    if (!this.editRow[user.id]) {
      return;
    }

    this.listOfData = this.userService.update(user.id, this.editRow[user.id]);
    this.cancel(user);
  }
}
