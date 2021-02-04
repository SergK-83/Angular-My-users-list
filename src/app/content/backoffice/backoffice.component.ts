import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
  host: {class: 'workspace'},
})
export class BackofficeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
