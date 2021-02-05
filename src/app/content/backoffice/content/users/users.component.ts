import {Component} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {IUser, UsersService} from '../../services/users.service';
import {map} from 'rxjs/operators';

export interface IUserFav extends IUser {
  isFavorite: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public users$: Observable<IUserFav[]>;
  public searchTextUser: string;
  public onlyFavorites: boolean;
  public favoritesUsersIds: any;
  private fetchedUsers$ = this.usersService.getUsers();

  constructor(
    private usersService: UsersService
  ) {
    usersService.searchTextUser.subscribe(value => this.searchTextUser = value);
    usersService.onlyFavorites.subscribe(value => this.onlyFavorites = value);
    this.favoritesUsersIds = usersService.favoritesUsersIds.subscribe(arr => this.favoritesUsersIds = arr);

    this.users$ = combineLatest([
      this.fetchedUsers$,
      usersService.searchTextUser,
      usersService.favoritesUsersIds,
      usersService.onlyFavorites
    ]).pipe(
      map(([fetchedUsers, searchTextUser, favoritesUsersIds, onlyFavorites]) => {
        return fetchedUsers.map(user => ({
          ...user,
          isFavorite: favoritesUsersIds.includes(user.id)
        })).filter(user => !onlyFavorites || user.isFavorite);
      })
    );
  }
}
