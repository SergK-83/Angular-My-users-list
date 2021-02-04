import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../services/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {

  @Input()
  public user: IUser = {} as IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
