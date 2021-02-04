import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface IUser {
  id: number;
  first_name: string;
  last_name;
  email: string;
  phone_number: string;
  picture_url: string;
  company_name: string;
  isFavorite?: boolean;
}

@Injectable()
export class UsersService {
  public searchTextUser: Subject<string> = new Subject();
  public onlyFavorites: Subject<boolean> = new Subject();

  constructor(
    private http: HttpClient
  ) {
    this.onlyFavorites.next(false);
  }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://online-directory-test.herokuapp.com/users');
  }
}
