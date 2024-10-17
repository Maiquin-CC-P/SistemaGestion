import { Component, Input, OnInit } from '@angular/core';
import { TablaMaestraList } from '../../../model/global/tabla-maestra.interface';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TablaMaestraForm } from '../../../model/global/tabla-maestra';
import { NotifierService } from 'angular-notifier';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Utils } from '../../../helpers/utils';
import { TablaMaestraService } from '../../../service/global/tabla-maestra.service';
import { TablaMaestraSave } from '../../../model/global/tabla-maestra-params';
import { SharedModule } from '../../../shared.module';
import { TablaMaestraDropDownComponent } from '../../controls/tabla-maestra-drop-down/tabla-maestra-drop-down.component';
import { AuditoriaFormComponent } from '../../auditoria-form/auditoria-form.component';
import { SessionService } from '../../../service/global/session.service';

@Component({
  selector: 'app-master-table-form',
  standalone: true,
  imports: [SharedModule, TablaMaestraDropDownComponent,
    AuditoriaFormComponent
  ],
  templateUrl: './master-table-form.component.html',
  styleUrl: './master-table-form.component.scss'
})
export class MasterTableFormComponent implements OnInit {
  @Input() item: TablaMaestraList | null = null;
  @Input() idTabla: number = 0;
  @Input() titulo: string = '';
  @Input() tituloValor: string = 'Valor';
  @Input() objEdit: {editValor: boolean, editDesc: boolean} = {editValor: false, editDesc: false}

  modalResult$: Subject<null> = new Subject<null>();
  insertUpdateForm!: FormGroup<TablaMaestraForm>;
  get control() {
    return this.insertUpdateForm.controls;
  }
  private notifier: NotifierService;
  constructor(notifier: NotifierService,
    private modalActiveService: NgbActiveModal,
    private formBuilder: FormBuilder,
    private utils: Utils,
    private tablaMaestraService: TablaMaestraService,
    private sessionService: SessionService
  ) {
    this.notifier = notifier;

    this.insertUpdateForm = this.formBuilder.group({
      idColumna: [0],
      valor: [''],
      descripcion: [{value: '',  disabled: this.objEdit.editDesc}],
      idEstado: [1]
    });
  }

  ngOnInit(): void {
    if (this.item) {
      this.onEdit();
    }
  }

  close(flagRefresh: boolean = false): void {
    if (flagRefresh) {
      this.modalResult$.next(null);
      this.modalResult$.complete();
    }
    this.modalActiveService.close('');
  }

  onEdit(): void {
    this.control.idColumna.setValue(this.item?.idColumna);
    this.control.valor.setValue(this.item?.valor);
    this.control.descripcion.setValue(this.item?.descripcion);
    this.control.idEstado.setValue(this.item?.idEstado);
  }

  onSave(): void {
    const params: TablaMaestraSave = {
      idEmpresaSede: this.sessionService.getIdSede(),
      idTabla: this.idTabla,
      idColumna: this.control.idColumna.value,
      valor: this.control.valor.value,
      descripcion: this.control.descripcion.value,
      idEstado: this.control.idEstado.value,
      idUsuarioAuditoria: this.sessionService.getIdUser(),
      hostName: ''
    };

    this.tablaMaestraService.save(params)
      .subscribe({
        next: res => {
          switch (res.tipo) {
            case 1:
              this.notifier.notify('success', res.mensaje);
              this.close(true);
              break;
            case 2:
              this.notifier.notify('warning', res.mensaje);
              break;

            default:
              this.notifier.notify('warning', res.mensaje);
              break;
          }
        },
        error: err => {
          this.notifier.notify('warning', err.err);
        }
      })
  }
}
