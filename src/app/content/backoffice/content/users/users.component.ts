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
  public usersCount: number;
  public perPageOptions = [5, 10, 15, 20];
  public currentPage = 1;
  public perPage = this.perPageOptions[0];
  public startUserIndex = 0;
  public lastUserIndex = this.perPage;
  public isFirstPage = true;
  public isLastPage = false;

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
        const updatedUsersList = fetchedUsers.map(user => ({
          ...user,
          isFavorite: favoritesUsersIds.includes(user.id)
        }))
          .filter(user => (!onlyFavorites || user.isFavorite) && `${user.first_name} ${user.last_name} ${user.email} ${user.phone_number} ${user.company_name}`.toLowerCase().includes(searchTextUser.toLowerCase()));

        this.usersCount = updatedUsersList.length;

        return updatedUsersList;
      })
    );
  }

  public nextPage(): void {
    if (this.isLastPage) {
      return;
    }

    this.currentPage++;

    // tslint:disable-next-line:no-unused-expression
    this.isFirstPage ? this.isFirstPage = false : null;

    this.startUserIndex += this.perPage;
    this.lastUserIndex += this.perPage;

    if (this.lastUserIndex >= this.usersCount) {
      this.isLastPage = true;
    }
  }

  public prevPage(): void {
    if (this.isFirstPage) {
      return;
    }

    this.currentPage--;

    // tslint:disable-next-line:no-unused-expression
    this.isLastPage ? this.isLastPage = false : null;

    this.startUserIndex -= this.perPage;
    this.lastUserIndex -= this.perPage;

    if (this.startUserIndex <= 0) {
      this.isFirstPage = true;
    }
  }

  public selectPage(pageNumber: number): void {

    this.currentPage = pageNumber;
    this.startUserIndex = (pageNumber - 1) * this.perPage;
    this.lastUserIndex = this.startUserIndex + this.perPage;

    if (this.startUserIndex <= 0) {
      this.isFirstPage = true;
    }

    if (this.lastUserIndex >= this.usersCount) {
      this.isLastPage = true;
    }
  }

  public changeUsersOnPage(countItemsOnPage: number): void {
    this.perPage = countItemsOnPage;
    this.currentPage = 1;
    this.startUserIndex = 0;
    this.lastUserIndex = this.perPage;
    this.isFirstPage = true;
    this.isLastPage = false;
  }
}
