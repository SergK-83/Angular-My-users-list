import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: number;
  @Input() itemsTotalCount: number;
  @Input() perPage: number;

  @Output() goPrev = new EventEmitter();
  @Output() goNext = new EventEmitter();
  @Output() goPage = new EventEmitter();

  public pagesCount: number;

  constructor() {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.itemsTotalCount / this.perPage);
  }

  public getPages(): any {
    console.log(new Array(this.pagesCount));
    return new Array(this.pagesCount);
  }

  public onPrev(): void {
    this.goPrev.emit();
  }

  public onNext(): void {
    this.goNext.emit();
  }

  public onPage(): void {
    this.goPage.emit();
  }
}
