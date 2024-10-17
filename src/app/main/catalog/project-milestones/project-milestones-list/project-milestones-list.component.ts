import { Component, OnInit } from '@angular/core';
import { TableFilterComponent } from "../../../../theme/shared/components/table-filter/table-filter.component";
import { TableListComponent } from "../../../../theme/shared/components/table-list/table-list.component";
import { TablePaginationComponent } from "../../../../theme/shared/components/table-pagination/table-pagination.component";
import { Pagination } from 'src/app/theme/shared/helpers/pagination';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from 'src/app/theme/shared/helpers/utils';
import { ProjectMilestonesData } from '../../smock/project-milestones-data';
import { ProjectMilestonesFormComponent } from '../project-milestones-form/project-milestones-form.component';
import { ProjectMilestonesListResult } from 'src/app/theme/shared/model/catalog/project-milestones/project-milestones-result.interface';

@Component({
  selector: 'app-project-milestones-list',
  standalone: true,
  imports: [TableFilterComponent, TableListComponent, TablePaginationComponent],
  templateUrl: './project-milestones-list.component.html',
  styleUrl: './project-milestones-list.component.scss'
})
export class ProjectMilestonesListComponent implements OnInit {
  list: ProjectMilestonesListResult[] = [];
  columns: string[] = ['Semana', 'Partida', 'Programado', 'Ejecutado'];
  rowItem: (keyof ProjectMilestonesListResult)[] = ['semana', 'partida', 'programado', 'ejecutado'];

  settings: Pagination = new Pagination();
  
  constructor(
    private modalService: NgbModal,
    private utilsService: Utils
  ){}

  ngOnInit(): void {
    this.onList();  
  }

  onList(): void {
    this.list = ProjectMilestonesData;
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

  onOpenForm(item: ProjectMilestonesListResult | null): void {
    const formModalRef = this.modalService.open(ProjectMilestonesFormComponent, {
      scrollable: false,
      size: 'lg'
    });

    formModalRef.componentInstance.item = item;
    formModalRef.componentInstance.modalResult$.subscribe(() => {
      this.onList();
    })
  }

  async onDelete(item: ProjectMilestonesListResult): Promise<void> {
    const isValid = await this.utilsService.mostrarConfirmacion('Esta seguro de eliminar este registro? esta acción no podra revertirce!');
    
    if (isValid) {
      console.log("🚀 ~ ScheduleListComponent ~ onDelete ~ item:", item)
    }
  }
}
