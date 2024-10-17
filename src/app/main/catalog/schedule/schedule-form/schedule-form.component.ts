import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Utils } from 'src/app/theme/shared/helpers/utils';
import { ScheduleForm } from 'src/app/theme/shared/model/catalog/schedule/schedule-form.interface';
import { ScheduleListResult } from 'src/app/theme/shared/model/catalog/schedule/schedule-result.interface';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { WeekDropDownComponent } from "../../../../theme/shared/components/controls/week-drop-down/week-drop-down.component";

@Component({
  selector: 'app-schedule-form',
  standalone: true,
  imports: [SharedModule, WeekDropDownComponent],
  templateUrl: './schedule-form.component.html',
  styleUrl: './schedule-form.component.scss'
})
export class ScheduleFormComponent implements OnInit {
  @Input() item: ScheduleListResult | null = null;
  @Input() idProyecto: number = 0;
  @Input() idUltimaSemana: number = 0;

  formInsertUpdate: FormGroup<ScheduleForm>;
  private modalResult$: Subject<null> = new Subject<null>();
  
  get control() {
    return this.formInsertUpdate.controls;
  }

  constructor(
    private modalActiveService: NgbActiveModal,
    private formBuilder: FormBuilder,
    private utilsService: Utils,
    ) 
    { 
      this.formInsertUpdate = this.formBuilder.group({
        semana: [1],
        avanceProgramadoSem: [0.0],
        avanceProgramado: [{value: 0.0, disabled: true}],
        flagReprogramado: [false],
        avanceReProgramadoSem: [0.0],
        avanceReProgramado: [{value: 0.0, disabled: true}],
        avanceRealSem: [0.0],
        avanceReal: [{value: 0.0, disabled: true}],
      })
    }


  ngOnInit(): void {
    this.control.semana.setValue(this.idUltimaSemana);
    
    if (this.item) {
      this.control.semana.setValue(this.item.semana);
      this.control.avanceProgramadoSem.setValue(this.item.avanceProgSemana);
      this.control.avanceProgramado.setValue(this.item.avanceProg);
      this.control.avanceReProgramadoSem.setValue(this.item.avanceReProgSemana);
      this.control.avanceReProgramado.setValue(this.item.avanceReProg);
      this.control.avanceRealSem.setValue(this.item.avanceRealSemana);
      this.control.avanceReal.setValue(this.item.avanceReal);
      this.control.flagReprogramado.setValue(this.item.flagReprogramado);
    }
  }

  close(): void {
    this.modalResult$.next(null);
    this.modalResult$.complete();
    this.modalActiveService.close('');
  }

  onSave(): void {
    this.utilsService.blockUIStart('Guardando información...');
    
    this.utilsService.blockUIStop();
  }
}
