import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

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

  constructor(
    private http: HttpClient
  ) {}

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://online-directory-test.herokuapp.com/users');
  }
}
