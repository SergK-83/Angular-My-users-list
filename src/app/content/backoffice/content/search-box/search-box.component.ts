import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  host: {class: 'search-box'},
})
export class SearchBoxComponent implements OnInit {
  public searchText = '';

  @Output()
  public onSearched = new EventEmitter<string>();

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
    this.userService.searchTextUser.next(this.searchText);
  }
}
