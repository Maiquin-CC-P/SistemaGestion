import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { TablaMaestraCombo } from '../../../model/global/tabla-maestra.interface';
import { TablaMaestraService } from '../../../service/global/tabla-maestra.service';
import { FormControl } from '@angular/forms';
import { SharedModule } from '../../../shared.module';
import { SessionService } from '../../../service/global/session.service';
import { ModelParams } from '../../../helpers/types';

@Component({
  selector: 'app-tabla-maestra-drop-down',
  standalone: true,
  imports: [NgSelectModule, SharedModule],
  templateUrl: './tabla-maestra-drop-down.component.html',
  styleUrl: './tabla-maestra-drop-down.component.scss'
})
export class TablaMaestraDropDownComponent implements OnInit {
  @Input() idTabla: number = 0;
  @Input() control: FormControl | null = null;
  @Input() model: ModelParams = '';
  @Input() titulo: string = 'Estado';
  @Output() eventChangeTM = new EventEmitter<TablaMaestraCombo>();

  optOptions: TablaMaestraCombo[] = [];


  constructor(
    private tablaMaestraService: TablaMaestraService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {

    this.tablaMaestraService.dropDown({
      idEmpresaSede: this.sessionService.getIdSede(),
      idTabla: this.idTabla
    }).subscribe((res) => {
      this.optOptions = res;
    })
  }

  onChangeTM(item: TablaMaestraCombo): void {
    this.eventChangeTM.emit(item);
  }
}
