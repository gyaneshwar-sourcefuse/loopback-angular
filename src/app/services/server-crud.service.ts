import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export abstract class ServerCrudService<T> {

  constructor(protected _http: HttpClient, protected _url: string) { }

  findAll() : Observable<T[]> {
    return this._http.get<T[]>(this._url)
  }
  
  delete(id: string) : Observable<T> {
    return this._http.delete<T>(this._url + "/" + id);
  }

  update(id: string, data: T) : Observable<T> {
    return this._http.patch<T>(this._url + "/" + id, data);
  }

}
