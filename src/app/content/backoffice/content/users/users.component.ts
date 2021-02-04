import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser, UsersService} from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public users$: Observable<IUser[]> = this.usersService.getUsers();
  public searchTextUser: string;
  public onlyFavorites: boolean;

  constructor(
    private usersService: UsersService
  ) {
    usersService.searchTextUser.subscribe(value => this.searchTextUser = value);
    usersService.onlyFavorites.subscribe(value => this.onlyFavorites = value);
  }
}
