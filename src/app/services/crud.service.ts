import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService<T> {
  data: T[] = [];
  constructor() {}

  findAll(): Array<T> {
    return this.data;
  }

  delete(id: string): T[] {
    const index: number = this.data.findIndex((item: any) => item.id === id);
    return this.data.splice(index, 1);
  }

  update(id: string, body: T): T[] {
    const index: number = this.data.findIndex((item: any) => item.id === id);
    this.data[index] = body;
    return this.data;
  }
}
