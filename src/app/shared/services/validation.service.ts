import { Injectable } from '@angular/core';
import {FormControl, ValidationErrors} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ValidationService {

  constructor(
    private http: HttpClient
  ) {}


  public usernameSpecialSymbols(control: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(control.value);

    return valid ? null : {username: 'Should contains only letters'};
  }

  public checkUser(user: any): Observable<ValidationErrors | null> {
    return this.http.post('http://localhost:8090/checkPassword', user);
  }
}
