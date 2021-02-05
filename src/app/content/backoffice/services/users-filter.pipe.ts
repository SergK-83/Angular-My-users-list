import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from './users.service';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(users: IUser[], searchText: string, onlyFavorites: boolean = false, favoritesUsersIds: number[]): IUser[] {

    let result: IUser[] = users;

    if (onlyFavorites) {
      result = result.filter((user: IUser) => favoritesUsersIds.includes(user.id));
    }

    if (!searchText) {
      return result;
    }

    return result.filter((user: IUser) => {
      return `${user.first_name} ${user.last_name} ${user.email} ${user.phone_number} ${user.company_name}`.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
