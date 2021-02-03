import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {

  @Input()
  public user: IUser = {} as IUser;

  public isFavorite = false;

  constructor() { }

  ngOnInit(): void {
  }

}
