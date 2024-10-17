import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableAction, TableOtherAction } from '../../model/helpers/utils';
import { AccionTable } from '../../enums/acciones-table.enum';
import { SharedModule } from '../../shared.module';
import { DynamicControlComponent } from '../controls/dynamic-control/dynamic-control.component';
import { Utils } from '../../helpers/utils';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [SharedModule, DynamicControlComponent],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.scss'
})
export class TableListComponent<T> implements OnInit {
  @Input() data!: T[];
  @Input() columns!: string[];
  @Input() rowItem!: (keyof T)[];
  @Input() flagClckRow: boolean = false;
  @Input() actions: TableAction[] = [];
  @Input() flagsDefautActions: { edit: boolean, delete: boolean } = { edit: true, delete: false };
  @Input() idRowSelect: number = -1;
  @Input() maxLength: number = 0;

  @Output() itemEvent: EventEmitter<T> = new EventEmitter<T>();
  @Output() editEvent: EventEmitter<T> = new EventEmitter<T>();
  @Output() deleteEvent: EventEmitter<T> = new EventEmitter<T>();
  @Output() otherEvent: EventEmitter<TableOtherAction<T>> = new EventEmitter<TableOtherAction<T>>();

  defaultAction: TableAction[] = [];

  constructor(
    private utilsService: Utils
  ) { }

  ngOnInit(): void {
    if (this.flagsDefautActions.edit) {
      this.defaultAction.push(
        this.utilsService.onGenerateItemTableAction('Editar', 'primary', 'icon-edit', AccionTable.EDIT, false, 'btn-0', 'btn-0')
      );
    }
    if (this.flagsDefautActions.delete) {
      this.defaultAction.push(
        this.utilsService.onGenerateItemTableAction('Eliminar', 'danger', 'icon-trash', AccionTable.DELETE, false, 'btn-1', 'btn-1')
      );
    }

    if (this.actions.length) {
      for (const item of this.actions) {
        this.defaultAction.push(
          this.utilsService.onGenerateItemTableAction(item.title, item.color, item.icon, item.eventEmit, false, `btn-${this.defaultAction.length}`, `btn-${this.defaultAction.length}`)
        );
      }
    }
    this.actions = this.defaultAction;
  }


  onSelectRow(item: T, index: number): void {
    if (this.flagClckRow) {
      this.itemEvent.emit(item);
      this.idRowSelect = index;
    }

  }

  handleButtonClick(item: T, buttonEvent: AccionTable): void {
    switch (buttonEvent) {
      case AccionTable.EDIT:
        this.editEvent.emit(item);
        break;
      case AccionTable.DELETE:
        this.deleteEvent.emit(item);
        break;
      case AccionTable.ITEMSELECT:
        this.itemEvent.emit(item);
        break;
      default:
        this.otherEvent.emit({ item, buttonEvent });
    }
  }
}
