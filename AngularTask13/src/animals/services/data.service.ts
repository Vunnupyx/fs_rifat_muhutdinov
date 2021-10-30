import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

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
  private _animals = new BehaviorSubject<Animal[]>([]);
  readonly animals = this._animals.asObservable();
  private dataStore: { animals: Animal[] } = {animals: []};

  private _url: string = 'http://localhost:3000';
  private _headers: HttpHeaders = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin',
      '*');

  constructor(private http: HttpClient) {
  }

  getAll() {
    this.http.get<any>(this._url + '/animals').subscribe(
      data => {
        this.dataStore.animals = data;
        this._animals.next(Object.assign({}, this.dataStore).animals);
      },
      error => throwError(error))
  };

  get(id: number): Observable<Animal> {
    return this.http.get<Animal>(this._url + '/animals/' + id, {'headers': this._headers}).pipe(map((res: any) => {
        return res;
      }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  create(data: Animal) {
    this.http.post<Animal>(this._url + '/animals', data, {'headers': this._headers}).subscribe(data => {
      this.dataStore.animals.push(data);
      this._animals.next(Object.assign({}, this.dataStore).animals);
    }, error => throwError(error));
  }

  update(data: Animal) {
    this.http.put<Animal>(this._url + '/animals/' + data.id, data, {'headers': this._headers}).subscribe(data => {
      this.dataStore.animals.forEach((animal, i) => {
        if (animal.id === data.id) {
          this.dataStore.animals[i] = data;
        }
      });

      this._animals.next(Object.assign({}, this.dataStore).animals);
    }, error => throwError(error));
  }

  remove(id: number) {
    this.http.delete(this._url + '/animals/' + id, {'headers': this._headers}).subscribe(response => {
      this.dataStore.animals.forEach((animal, i) => {
        if (animal.id === id) {
          this.dataStore.animals.splice(i, 1);
        }
      });

      this._animals.next(Object.assign({}, this.dataStore).animals);
    }, error => throwError(error));
  }

}
