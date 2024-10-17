import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { PAGEOPTION } from '../../constants/pagination.constant';
import { Pagination } from '../../helpers/pagination';
import { SharedModule } from '../../shared.module';
import { FilterOtherAction, FilterAction } from '../../model/helpers/utils';
import { AccionFilter } from '../../enums/acciones-table.enum';

@Component({
  selector: 'app-table-filter',
  standalone: true,
  imports: [NgSelectModule, SharedModule],
  templateUrl: './table-filter.component.html',
  styleUrl: './table-filter.component.scss'
})
export class TableFilterComponent<T> implements OnInit {
  @Input() flagBtnNew: boolean = true;
  @Input() flagEstado: boolean = true;
  @Input() flagPageSize: boolean = true;
  @Input() flagBtnRefresh: boolean = true;
  @Input() actions: FilterAction[] = [];
  @Input() cantShow: number = 10;
  @Input() flagSearch: boolean = true;
  @Output() openFormEvent: EventEmitter<T | null> = new EventEmitter<T | null>();
  @Output() filterEvent: EventEmitter<Pagination> = new EventEmitter<Pagination>();
  @Output() otherEvent: EventEmitter<FilterOtherAction> = new EventEmitter<FilterOtherAction>();

  forPageOptions = PAGEOPTION;
  settings: Pagination = new Pagination();

  payments = [
    {
      mode: 'Todos',
      checked: false,
      color: 'primary',
      value: 0
    },
    {
      mode: 'Activo',
      checked: true,
      color: 'success',
      value: 1
    },
    {
      mode: 'Inactivo',
      checked: false,
      color: 'danger',
      value: 2
    }
  ];

  ngOnInit(): void {
    if (this.cantShow === 0) {
      this.settings.pageSize = 9999999
    }
    else {
      this.settings.pageSize = this.cantShow
    }
  }

  onRefresh(): void {
    this.filterEvent.emit(this.settings);
  }

  onOpenForm(item: T | null): void {
    this.openFormEvent.emit(item);
  }

  handleButtonClick(buttonEvent: AccionFilter): void {
    this.otherEvent.emit({ buttonEvent });
  }
}
