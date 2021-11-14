import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export interface Animal {
  breed: string;
  name: string;
  type: string;
  gender: string;
  age: number;
  weight: number;
  furLength: string;
  img: string | File;
  id?: number
}

@Injectable()
export class DataService {

  private _url: string = 'http://localhost:3000';
  private _headers: HttpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin',
      '*');

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this._url + '/animals').pipe(
      map((data: Animal[]) => {
        return data;
      })
    )
  }

  create(data: Animal): Observable<Animal> {
    return this.http.post<Animal>(this._url + '/animals', data, {'headers': this._headers});
  }

  remove(id: number): Observable<Animal> {
    return this.http.delete<Animal>(this._url + '/animals/' + id, {'headers': this._headers});
  }

  update(data: Animal): Observable<Animal> {
    return this.http.put<Animal>(this._url + '/animals/' + data.id, data, {'headers': this._headers});
  }

  get(id: string): Observable<Animal> {
    return this.http.get<Animal>(this._url + '/animals/' + id, {'headers': this._headers});
  }

}
