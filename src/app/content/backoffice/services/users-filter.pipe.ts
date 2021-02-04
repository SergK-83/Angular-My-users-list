import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from './users.service';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  transform(users: IUser[], searchText: string, isFavorite: boolean = false): IUser[] {

    console.log(isFavorite);

    let result: IUser[] = users;

    if (isFavorite) {
      result = result.filter((user: IUser) => user.isFavorite);
    }

    if (!searchText) {
      return result;
    }

    return result.filter((user: IUser) => {
      return `${user.first_name} ${user.last_name} ${user.email} ${user.phone_number} ${user.company_name}`.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
