import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser, UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users$: Observable<IUser[]> = this.usersService.getUsers();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }

}
