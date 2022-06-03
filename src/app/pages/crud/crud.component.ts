import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerUserService } from 'src/app/services/server-user.service';
import { Role, User } from '../../interfaces/app';

@Component({
  selector: 'app-root',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent {
  listOfData: User[] = [];
  editRow: { [key: string]: any } = {};
  load: boolean = false;
  role = Role;

  title = 'table';

  constructor(private userService: ServerUserService) {}

  loadData() {
    this.load = true;
    this.getData();
  }

  getData() {
    this.userService.findAll().subscribe((res: User[]) => {
      this.listOfData = res;
    });
  }

  refresh() {
    this.getData();
  }

  edit(user: User) {
    this.editRow[user.id] = { ...user };
    //delete this.editRow[user.id].id;
  }

  cancel(user: User) {
    delete this.editRow[user.id];
  }

  delete(user: User) {
    this.userService.delete(user.id).subscribe((res: User) => {
      this.getData();
    });
  }

  save(user: User) {
    if (!this.editRow[user.id]) {
      return;
    }

    this.userService.update(user.id, this.editRow[user.id]).subscribe({
      next: (res: User) => {
        this.getData();
      },
      error: (e) => {},
      complete: () => {
        this.cancel(user);
      },
    });
  }
}
