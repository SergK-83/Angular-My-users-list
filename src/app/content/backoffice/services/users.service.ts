import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

export interface IUser {
  id: number;
  first_name: string;
  last_name;
  email: string;
  phone_number: string;
  picture_url: string;
  company_name: string;
}

@Injectable()
export class UsersService {
  public searchTextUser: BehaviorSubject<string> = new BehaviorSubject('');
  public onlyFavorites: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public favoritesUsersIds: BehaviorSubject<number[]> = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
  ) {
  }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://online-directory-test.herokuapp.com/users');
  }
}
