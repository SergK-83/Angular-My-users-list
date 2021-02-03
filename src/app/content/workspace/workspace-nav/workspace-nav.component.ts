import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace-nav',
  templateUrl: './workspace-nav.component.html',
  styleUrls: ['./workspace-nav.component.scss'],
  host: {class: 'workspace__nav'},
})
export class WorkspaceNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
