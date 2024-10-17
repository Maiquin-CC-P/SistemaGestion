import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-pagination',
  standalone: true,
  imports: [NgbPaginationModule, SharedModule, CommonModule],
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.scss'
})
export class TablePaginationComponent {
  @Input() collectionSize!: number;
  @Input() page!: number;
  @Input() pageSize!: number;
  @Output() pageChange = new EventEmitter<number>();

  public forPageOptions = [10, 25, 50, 100];

  tableDefaultPageSettings = {
    searchString: '',
    colletionSize: 0,
    page: 1,
    pageSize: 10
  };
  
  settings = { ...this.tableDefaultPageSettings };
  constructor() { }

  onPageChange(newPage: number) {
    this.pageChange.emit(newPage);
  }
}
