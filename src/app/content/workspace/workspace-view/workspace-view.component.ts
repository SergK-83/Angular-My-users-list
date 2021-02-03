import { Component, OnInit } from '@angular/core';
import {UsersComponent} from './users/users.component';

@Component({
  selector: 'app-workspace-view',
  templateUrl: './workspace-view.component.html',
  styleUrls: ['./workspace-view.component.scss'],
  host: {class: 'workspace__view'},
})
export class WorkspaceViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
