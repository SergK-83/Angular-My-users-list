import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  host: {class: 'workspace'},
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
