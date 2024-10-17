import { Component, Input, OnInit } from '@angular/core';
import { TableFilterComponent } from '../../table-filter/table-filter.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TablaMaestraList } from '../../../model/global/tabla-maestra.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TablaMaestraService } from '../../../service/global/tabla-maestra.service';
import { Utils } from '../../../helpers/utils';
import { TablaMaestraListP } from '../../../model/global/tabla-maestra-params';
import { MasterTableFormComponent } from '../master-table-form/master-table-form.component';
import { Pagination } from '../../../helpers/pagination';
import { TablePaginationComponent } from '../../table-pagination/table-pagination.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-master-table-list',
  standalone: true,
  imports: [TableFilterComponent, TableListComponent, TablePaginationComponent],
  templateUrl: './master-table-list.component.html',
  styleUrl: './master-table-list.component.scss'
})
export class MasterTableListComponent implements OnInit {
  @Input() idTabla!: number;
  @Input() columnsName: string[] = ['', ''];
  @Input() flagClckRow: boolean = false;

  list: TablaMaestraList[] = [];

  rowItem: (keyof TablaMaestraList)[] = ['descripcion', 'estado'];

  settings: Pagination = new Pagination();
  modalResult$: Subject<TablaMaestraList | null> = new Subject<TablaMaestraList | null>();

  constructor(
    private modalService: NgbModal,
    private tablaMaestraService: TablaMaestraService,
    private utilsService: Utils
  ) { }

  ngOnInit(): void {
    this.onlist();
  }

  onlist(): void {

    this.utilsService.blockUIStart('Obteniendo información...');
    const params: TablaMaestraListP = {
      idEmpresaSede: 1,
      idTabla: this.idTabla,
      idColumna: 0,
      search: this.settings.searchString,
      idEstado: this.settings.idEstado,
      pageIndex: this.settings.page,
      pageSize: this.settings.pageSize
    }

    this.tablaMaestraService.list(params)
      .subscribe({
        next: (res) => {
          this.list = res;
          
          this.settings.collectionSize = res.length ? res[0].totalElements : 0;
          this.utilsService.blockUIStop();
        },
        error: (err) => {
          this.utilsService.showNotification('error', err.error)
          this.utilsService.blockUIStop();
        }
      });
  }

  onRefresh(params: Pagination | number): void {
    if (typeof params === 'number') {
      this.settings.page = params
    }
    else {
      this.settings = params;
    }

    this.onlist();
  }

  onOpenForm(item: TablaMaestraList | null): void {
    const formModalRef = this.modalService.open(MasterTableFormComponent, {
      scrollable: false,
      size: 'sm'
    });

    formModalRef.componentInstance.item = item;
    formModalRef.componentInstance.idTabla = this.idTabla;
    formModalRef.componentInstance.titulo = this.columnsName[0];
    formModalRef.componentInstance.modalResult$.subscribe(() => {
      this.onlist();
    })
  }

  onDelete(item: TablaMaestraList): void {
    console.log("🚀 ~ Jerarquia4ClienteListComponent ~ onDelete ~ item:", item)

  }

  onClose(flagRefresh: boolean = false, item: TablaMaestraList | null = null): void {
    if (flagRefresh) {
      this.modalResult$.next(item);
      this.modalResult$.complete();
    }
  }

  onSelectRow(item: TablaMaestraList): void {
    this.onClose(true, item);
  }
}
