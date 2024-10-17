import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { TableListComponent } from '../table-list/table-list.component';
import { InputGroupComponent } from "../input-group/input-group.component";
import { TableFilterComponent } from "../table-filter/table-filter.component";
import { TablePaginationComponent } from "../table-pagination/table-pagination.component";
import { Pagination } from '../../helpers/pagination';
import { ProductoBaseNestleDropDown } from '../../model/cambio-precio/producto-base-nestle/producto-base-nestle.interface';

@Component({
  selector: 'app-input-group-select',
  standalone: true,
  imports: [SharedModule, TableListComponent, InputGroupComponent, TableFilterComponent, TablePaginationComponent],
  templateUrl: './input-group-select.component.html',
  styleUrl: './input-group-select.component.scss'
})
export class InputGroupSelectComponent {
  @Input() labelText: string = '';
  @Input() placeHolder: string = '';
  @Input() control!: FormControl;
  @Input() isValid: boolean = false;
  @Output() eventClick: EventEmitter<null> = new EventEmitter();
  @Input() btnDisabled: boolean = false;
  @Input() icon: string = 'feather icon-search';
  @Input() type: string = 'text';
  @Input() data: ProductoBaseNestleDropDown[] = [];
  @Input() columns: string[] = [];
  @Input() dataItem: (keyof ProductoBaseNestleDropDown)[] = [];
  @Output() selectItem: EventEmitter<ProductoBaseNestleDropDown> = new EventEmitter();

  @Input() newButton: {icon: string, color: string} | null = null;
  @Output() newEventClick: EventEmitter<null> = new EventEmitter();

  isOpen = false;
  // icon: string = 'feather icon-arrow-down';

  settings: Pagination = new Pagination();
  listProductPage: ProductoBaseNestleDropDown[] = [];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onSendEvent(): void {
    this.eventClick.emit();
  }

  onNewEventClick(): void {
    this.newEventClick.emit();
  }

  onSelectItem(item: ProductoBaseNestleDropDown): void {
    this.selectItem.emit(item);
  }

  onRefresh(params: Pagination | number): void {
    if (typeof params === 'number') {
      this.settings.page = params
    }
    else {
      this.settings = params;
    }

    this.updatePaginatedData();
  }

  updatePaginatedData() {

    // filter our data
    let temp: ProductoBaseNestleDropDown[] = [];
    if (this.settings.searchString) {
      const val = this.settings.searchString.toLowerCase();
      temp = this.data.filter(function (d) {
        const codOrganizacionVentaNestlePadre = (d.codOrganizacionVentaNestlePadre ?? '').toLowerCase();
        const organizacionVentaNestle = (d.organizacionVentaNestle ?? '').toLowerCase();
        const codSubCategoriaNestle = (d.codSubCategoriaNestle ?? '').toLowerCase();
        const subCategoriaNestle = (d.subCategoriaNestle ?? '').toLowerCase();
        const codProductoNestle = (d.codProductoNestle ?? '').toLowerCase();
        const productoNestle = (d.productoNestle ?? '').toLowerCase();
      
        return codOrganizacionVentaNestlePadre.indexOf(val) !== -1 ||
          organizacionVentaNestle.indexOf(val) !== -1 ||
          codSubCategoriaNestle.indexOf(val) !== -1 ||
          subCategoriaNestle.indexOf(val) !== -1 ||
          codProductoNestle.indexOf(val) !== -1 ||
          productoNestle.indexOf(val) !== -1 ||
          !val;
      });
    } else {
      temp = this.data;
    }

    this.settings.collectionSize = temp.length;
    const startIndex = (this.settings.page - 1) * this.settings.pageSize;
    const endIndex = startIndex + this.settings.pageSize;
    this.listProductPage = temp.slice(startIndex, endIndex);
  }
}
