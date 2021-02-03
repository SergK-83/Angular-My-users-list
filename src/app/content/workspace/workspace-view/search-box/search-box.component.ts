import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  host: {class: 'search-box'},
})
export class SearchBoxComponent implements OnInit {
  public searchText = '';

  constructor() { }

  ngOnInit(): void {
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }
}
