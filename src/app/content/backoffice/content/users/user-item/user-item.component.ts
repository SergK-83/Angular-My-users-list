import {Component, Input, OnInit} from '@angular/core';
import {IUser, UsersService} from '../../../services/users.service';
import {IUserFav} from '../users.component';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit{

  @Input()
  public user: IUserFav;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
  }

  public toggleFavorite(): void {
    const userIds = this.usersService.favoritesUsersIds.value;
    const shouldAddToFavorite = !userIds.includes(this.user.id);
    if (shouldAddToFavorite) {

      this.usersService.favoritesUsersIds.next([...userIds, this.user.id]);

    } else {
      this.usersService.favoritesUsersIds.next(userIds.filter(id => id !== this.user.id));
    }
  }
}
