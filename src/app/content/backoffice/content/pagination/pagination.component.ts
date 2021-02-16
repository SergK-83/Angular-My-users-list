import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  host: {class: 'pagination-wrap'}
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number;
  @Input() itemsTotalCount: number;
  @Input() perPageOptions: number[];
  @Input() perPage: number;
  @Input() pagesToShow: number;

  @Output() goPrev = new EventEmitter();
  @Output() goNext = new EventEmitter();
  @Output() selectPage = new EventEmitter<number>();
  @Output() changeUsersOnPage = new EventEmitter();

  public pagesCount: number;

  constructor() {
  }

  ngOnInit(): void {
    this.perPage = this.perPageOptions[0];

    this.pagesCount = Math.ceil(this.itemsTotalCount / this.perPage);
  }

  public getPages(): number[] {
    const pages: number[] = [];

    for (let i = 1; i <= this.pagesToShow; i++) {
      pages.push(i);
    }
    return pages;
  }

  public changePerPageOption(countOnPage: number): void {
    this.pagesCount = Math.ceil(this.itemsTotalCount / +countOnPage);
    this.changeUsersOnPage.emit(+countOnPage);
  }

  public onPrev(): void {
    this.goPrev.emit();
  }

  public onNext(): void {
    this.goNext.emit();
  }

  public onPage(pageNumber: number): void {
    this.selectPage.emit(pageNumber);
  }
}
