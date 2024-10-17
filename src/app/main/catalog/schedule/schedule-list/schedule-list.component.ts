import { Component, OnInit } from '@angular/core';
import { TableFilterComponent } from "../../../../theme/shared/components/table-filter/table-filter.component";
import { TableListComponent } from "../../../../theme/shared/components/table-list/table-list.component";
import { TablePaginationComponent } from "../../../../theme/shared/components/table-pagination/table-pagination.component";
import { ScheduleListResult } from 'src/app/theme/shared/model/catalog/schedule/schedule-result.interface';
import { Pagination } from 'src/app/theme/shared/helpers/pagination';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleFormComponent } from '../schedule-form/schedule-form.component';
import { Utils } from 'src/app/theme/shared/helpers/utils';
import { Data } from '../../smock/list-data';

@Component({
  selector: 'app-schedule-list',
  standalone: true,
  imports: [TableFilterComponent, TableListComponent, TablePaginationComponent],
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.scss'
})
export class ScheduleListComponent implements OnInit{

  list: ScheduleListResult[] = [];
  columns: string[] = ['Semana', 'AVANCE PROG. SEM. (%)', 'Avance Prog. Acum. (%)', 'AVANCE RE-PROG. SEM. (%)', 'AVANCE RE-PROG. (%)', 'AVANCE REAL SEM. (%)', 'AVANCE REAL (%)'];
  rowItem: (keyof ScheduleListResult)[] = ['semana', 'avanceProgSemana', 'avanceProg', 'avanceReProgSemana', 'avanceReProg', 'avanceRealSemana', 'avanceReal'];

  settings: Pagination = new Pagination();
  
  constructor(
    private modalService: NgbModal,
    private utilsService: Utils
  ){}
  ngOnInit(): void {
    this.onList();  
  }

  onList(): void {
    this.list = Data;
    this.settings.collectionSize = this.list.length;
  }

  onRefresh(params: Pagination | number): void {
    if (typeof params === 'number') {
      this.settings.page = params
    }
    else {
      this.settings = params;
    }

    this.onList();
  }

  onOpenForm(item: ScheduleListResult | null): void {
    const formModalRef = this.modalService.open(ScheduleFormComponent, {
      scrollable: false,
      size: 'lg'
    });

    formModalRef.componentInstance.item = item;
    formModalRef.componentInstance.modalResult$.subscribe(() => {
      this.onList();
    })
  }

  async onDelete(item: ScheduleListResult): Promise<void> {
    const isValid = await this.utilsService.mostrarConfirmacion('Esta seguro de eliminar este registro? esta acción no podra revertirce!');
    
    if (isValid) {
      console.log("🚀 ~ ScheduleListComponent ~ onDelete ~ item:", item)
      // const params: ClienteFagalDeleteParams = {
      //   idEmpresaSede: this.sessionService.getIdSede(),
      //   idCliente: item.idCliente,
      //   idUsuarioAuditoria: this.sessionService.getIdUser(),
      //   hostName: ''
      // };

      // this.clienteService.delete(params)
      //   .subscribe({
      //     next: (res) => {
      //       switch (res.tipo) {
      //         case 1:
      //           this.utilsService.showNotification('success', res.mensaje);
      //           this.onlist();
      //           break;
      //         case 2:
      //           this.utilsService.showNotification('warning', res.mensaje);
      //           break;
      //       }
      //     },
      //     error: err => {
      //       this.utilsService.showNotification('error', err.error);
      //     }
      //   });
    }
  }
}
