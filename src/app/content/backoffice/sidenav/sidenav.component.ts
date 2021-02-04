import { Component } from '@angular/core';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-workspace-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  host: {class: 'workspace__nav'},
})
export class SidenavComponent {
  public onlyFavorites: boolean;

  constructor(
    private userService: UsersService
  ) {
    this.userService.onlyFavorites.subscribe(value => this.onlyFavorites = value);
  }

  public showOnlyFavoritesUsers(): void {
    this.userService.onlyFavorites.next(true);
  }

  public showAllUsers(): void {
    this.userService.onlyFavorites.next(false);
  }
}
